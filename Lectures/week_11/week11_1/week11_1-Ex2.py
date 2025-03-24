from flask import Flask

app = Flask(__name__)

# Define routes and associated functions
@app.route('/')
def home():
  return 'This is Home API'

@app.route('/test')
def articles():
  return 'This is Articles API'

@app.route('/about')
def about():
  return 'This is About API'

# Run the Flask application
if __name__ == '__main__':
  app.run()