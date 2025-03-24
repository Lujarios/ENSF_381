from flask import Flask
app = Flask(__name__)

@app.route('/')
def welcome():
  return '<h1>Welcome to Flask!</h1>'

@app.route('/<name>')
def welcome_user(name):
  return '<h1>Hello, {}!</h1>'.format(name)

@app.route('/user/<name>')
def user_point(name):
  return '<h1>Hello {}, from USER API!</h1>'.format(name)

if __name__ == '__main__':
  app.run()
