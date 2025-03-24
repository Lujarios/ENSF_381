from flask import Flask

app = Flask(__name__)

# Define a route that handles GET requests
@app.route('/get_example', methods=['GET'])
def get_example():
  return 'This is a GET request example'

# Define a route that handles POST requests
@app.route('/post_example', methods=['GET','POST'])
def post_example():
  return 'This is a POST request example'

# Define a route that handles PUT requests
@app.route('/put_example', methods=['PUT'])
def put_example():
  return 'This is a PUT request example'

# Define a route that handles DELETE requests
@app.route('/delete_example', methods=['DELETE'])
def delete_example():
  return 'This is a DELETE request example '

if __name__ == '__main__':
  app.run()