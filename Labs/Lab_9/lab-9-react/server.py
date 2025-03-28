from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

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
@app.route('/predict_house_price',methods=['POST'])
def home():
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

@app.route('/about')
def about():
  return 'Welcome to the About Us page!'

if __name__ == '__main__':
  app.run(debug=True)