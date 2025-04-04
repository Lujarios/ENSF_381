# Luca Rios - 30181439
# Millaine Li 30188606

# please we finished it, just forgot to submit :( please have mercy 



from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

valid_logins = {
	"alice": "password123",
	"bob": "secure456",
	"charlie": "qwerty789",
	"diana": "hunter2",
	"eve": "passpass",
	"frank": "letmein",
	"grace": "trustno1",
	"heidi": "admin123",
	"ivan": "welcome1",
	"judy": "password1"
}

# Assigning multiple routes to the same function
@app.route('/validate_login',methods=['POST'])
def validate_login():
	# { username: "name", password: "password" }
	data = request.get_json() # Retrieves the JSON data from the incoming request and store it in a dictionary
	username = data['username']
	password = data['password']

	print('Validating login of:', username)
	if username in valid_logins and valid_logins[username] == password:
		print('Login successful!')
		return {'success': True, 'message': 'Login successful!'}, 200
	else:
		print('Login failed!')
		return {'success': False, 'message': 'Invalid username or password!'}, 401
	

@app.route('/predict_house_price',methods=['POST'])
def predict_house_price():
	model = joblib.load("./src/random_forest_model.pkl") 
	print("Model loaded")
	
	data = request.json 
	
	cats = True if 'pets' in data and data['pets'] else False 
	dogs = True if 'pets' in data and data['pets'] else False 
	
	sample_data = [ 
	data['city'], 
	data['province'], 
	float(data['latitude']), 
	float(data['longitude']), 
	data['lease_term'], 
	data['type'], 
	float(data['beds']), 
	float(data['baths']), 
	float(data['sq_feet']), 
	data['furnishing'], 
	data['smoking'], 
	cats, 
	dogs 
	] 
	
	sample_df = pd.DataFrame([sample_data], columns=[ 
	'city', 'province', 'latitude', 'longitude', 'lease_term', 
	'type', 'beds', 'baths', 'sq_feet', 'furnishing', 
	'smoking', 'cats', 'dogs' 
	]) 
	print(sample_df)
	
	predicted_price = model.predict(sample_df) 
	print(predicted_price)
	
	return jsonify({"predicted_price": float(predicted_price[0])})

if __name__ == '__main__':
  app.run(debug=True)