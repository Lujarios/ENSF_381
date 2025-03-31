from flask import Flask, request
from flask_cors import CORS
import random

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

# Assigning multiple routes to the same function
@app.route('/register',methods=['POST'])
def register():
	# Receives: {username, password, email}
	# Returns: {student_id}
	data = request.get_json()
	student_id = getNewStudentId()
	# unique username
	if data["username"] in [students[i]["username"] for i in students]:
		return {"success": False, "message": "Username already exists"}, 400
	else:
		students[student_id] = {
			"username": data["username"],
			"password": data["password"],
			"email": data["email"],
			"enrolled_courses": []
		}
		printStudents()
		return {"success": True, "student_id": student_id, "message": "Registration successful"}, 200

@app.route('/login',methods=['POST'])
def login():
	return "Hello from [login] backend"

@app.route('/testimonials',methods=['POST'])
def testimonials():
	return "Hello from [testimonials] backend"

@app.route('/enroll/<student_id>',methods=['POST'])
def enroll(student_id):
	return ("Hello from [enroll] backend, you sent student_id: " + student_id)

@app.route('/drop/<student_id>',methods=['DELETE'])
def drop(student_id):
	return ("Hello from [drop] backend, you sent student_id: " + student_id)

@app.route('/courses',methods=['GET'])
def courses():
	return "Hello from [courses] backend"

@app.route('/student_courses/<student_id>',methods=['GET'])
def student_courses(student_id):
	return ("Hello from [student_courses] backend, you sent student_id: " + student_id)

if __name__ == '__main__':
  app.run(debug=True)