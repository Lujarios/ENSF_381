from flask import Flask

app = Flask(__name__)

# Assigning multiple routes to the same function
@app.route('/')
@app.route('/home')
@app.route('/main')
def home():
  return 'Welcome to the home page!'

@app.route('/about')
def about():
  return 'Welcome to the About Us page!'

if __name__ == '__main__':
  app.run(host="localhost", port=4000, debug=True, threaded=True, processes=1)

