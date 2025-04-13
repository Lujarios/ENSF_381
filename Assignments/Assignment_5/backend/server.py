from flask import Flask, request
from flask_cors import CORS
import random
import json
import re

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# key: student_id
# data: {username, password, email, enrolled_courses(list)}
# 2 sample data already added
students = {
	"5122": {
		"username": "Bret",
		"password": "1234",
		"email": "bret@me.com",
		"enrolled_courses": [1,4,6]
	},
	"6724": {
		"username": "Leanne",
		"password": "9876",
		"email": "leanna@gmail.com",
		"enrolled_courses": [2,3,5]
	}
}
def checkUsername(username):
	if (len(username) >20) or (len(username) < 3):
		return False
	if not username[0].isalpha():
		return False
	if not re.match(r'^[A-Za-z][A-Za-z0-9_-]*$', username):
		return False
	
	return True

def checkPassword(password):
    if len(password) < 8:
        return False
    
    if not re.search(r'[A-Z]', password): 
        return False
    if not re.search(r'[a-z]', password):  
        return False
    if not re.search(r'[0-9]', password): 
        return False
    if not re.search(r'[!@#$%^&*()\-\+=\[\]{}|;:\'",.<>?/`~]', password):  
        return False

    if ' ' in password:
        return False
    
    return True

def checkEmail(email):
	if not re.match(r'^[0-9a-zA-Z_.]+@(gmail|ucalgary|hotmail|yahoo|example).(com|ca|net|io)$', email):
		return False
	return True


def verifySignup(username, password, confirm_password, email):
	messages =[]
	if (checkUsername(username) == False):
		messages.append("Username must be between 3-20 characters. Only alphanumeric characters, hyphens, and underscores allowed. Must start with a letter.")
	if(checkPassword(password) == False ):
		messages.append("bad passssword fix this message tho")
	if (not(password == confirm_password)):
		messages.append("Passwords do not match CHECK THIS THO")
	#check email still 
	return messages


def printStudents():
	# prints all students in the database
	print("Students:")
	for student_id in students:
		print(f"student_id: {student_id}, data: {students[student_id]}")

def getNewStudentId():
	# returns a new student_id
	# student_id is a 4 digit random number
	# no repetition allowed
	student_id = str(random.randint(1000,9999))
	while student_id in students:
		student_id = str(random.randint(1000,9999))
	return student_id


@app.route('/register',methods=['POST'])
def register():
	print("IN REGISTER")
	data = request.get_json()
	student_id = getNewStudentId()
	# messages = verifySignup()
	messages =[]
	username = data["username"]
	print("USERNAME IS")
	print(username)
	password = data['password']
	confirm_password = data['confirm_password']
	email = data['email']

	valid = True

	if data["username"] in [students[i]["username"] for i in students]:
		messages.append("Username already exists")
		valid = False
	if (checkUsername(username) == False):
		valid = False
		print("HEHE")
		messages.append("Invalid Username (Reason: Must be between 3-20 characters, only alphanumeric characters, hyphens, and underscores allowed. Must start with a letter)")
	if(checkPassword(password) == False ):
		valid = False
		messages.append("Invalid Password (Reason: Must be at least 8 characters long. Must contain at least one uppercase letter, lowercase letter, number, and special character. No spaces)")
	if (not(password == confirm_password)):
		valid = False
		messages.append("Passwords do not match")
	if(checkEmail(email) == False ):
		valid = False
		messages.append("Invalid Email (Reason: Must be a valid email with an @ symbol followed by 'gmail', 'ucalgary', 'hotmail', 'yahoo', or 'example'), and ending with domains (.com, .ca, .net, .io). No spaces. (E.g. username@example.com )")

	if (valid):
		students[student_id] = {
			"username": data["username"],
			"password": data["password"],
			"email": data["email"],
			"enrolled_courses": []
		}
		printStudents()
		return {"success": True, "student_id": student_id, "message": "Signup successful! Redirecting to login..."}, 200

	else:
		return {"success": False, "message": messages}, 200
	
		
		
@app.route('/login',methods=['POST'])
def login():
	data = request.get_json()
	for student_id in students:
		if students[student_id]["username"] == data["username"] and students[student_id]["password"] == data["password"]:
			return {"success": True, "student_id": student_id, "message": "Login Successful!"}, 200
	return {"success": False, "message": "Incorrect username or password."}, 200

@app.route('/testimonials',methods=['GET'])
def testimonials():
	with open('data/testimonials.json') as f:
		testimonials = json.load(f)
	random_testimonials = random.sample(testimonials, 2)
	return {"testimonials": random_testimonials}, 200

@app.route('/enroll/<student_id>',methods=['POST'])
def enroll(student_id):
	data = request.get_json()
	if student_id not in students:
		return {"success": False, "message": "Student ID not found"}, 404
	if data["course_id"] in students[student_id]["enrolled_courses"]:
		return {"success": False, "message": "Already enrolled in this course"}, 400
	students[student_id]["enrolled_courses"].append(data["course_id"])
	printStudents()
	return {"success": True, "message": "Enrollment successful"}, 200

@app.route('/drop/<student_id>',methods=['DELETE'])
def drop(student_id):
	data = request.get_json()
	if student_id not in students:
		return {"success": False, "message": "Student ID not found"}, 404
	if data["course_id"] not in students[student_id]["enrolled_courses"]:
		return {"success": False, "message": "Not enrolled in this course"}, 400
	students[student_id]["enrolled_courses"].remove(data["course_id"])
	printStudents()
	return {"success": True, "message": "Course dropped successfully"}, 200

@app.route('/courses',methods=['GET'])
def courses():
	with open('data/courses.json') as f:
		courses = json.load(f)
	return {"courses": courses}, 200

@app.route('/student_courses/<student_id>',methods=['GET'])
def student_courses(student_id):
	if student_id not in students:
		return {"success": False, "message": "Student ID not found"}, 404
	return {"success": True, "enrolled_courses": students[student_id]["enrolled_courses"]}, 200

if __name__ == '__main__':
  app.run(debug=True)