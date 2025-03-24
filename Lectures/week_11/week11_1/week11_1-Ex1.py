# Import the Flask class
from flask import Flask

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route and the corresponding function
@app.route('/')
def index():
    return 'Hello students, Welcome to ENSF381: Flask!'

# Run the application if this script is executed
if __name__ == '__main__':
    # app.run(debug=True) # Enable debug mode
    app.run() # Disable debug mode
