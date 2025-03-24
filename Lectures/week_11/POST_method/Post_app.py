from flask import Flask, render_template, request

app = Flask(__name__)

# Define a route that handles GET requests
@app.route('/get_example', methods=['GET'])
def get_example():
  return 'This is a GET request example'

# Define a route that handles POST requests
@app.route('/post_example', methods=['GET', 'POST'])
def post_example():
    if request.method == 'POST':
        return "This is a POST request example."
    return render_template('form.html')  # Show the form for GET requests

if __name__ == '__main__':
  app.run(debug=True)