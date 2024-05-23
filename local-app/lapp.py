from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Function to read the count from the file
def read_count():
    if os.path.exists('count.txt'):
        with open('count.txt', 'r') as file:
            count = file.read()
            try:
                return int(count)
            except ValueError:
                return 0
    else:
        return 0

# Function to write the count to the file
def write_count(count):
    with open('count.txt', 'w') as file:
        file.write(str(count))

# Route to handle POST requests
@app.route('/', methods=['POST'])
def increment_count():
    data = request.form
    count = data.get('count')
    
    if count is None or not count.isnumeric():
        return 'Invalid count value. Please provide a numeric count.', 400
    
    count = int(count) + 1
    write_count(count)
    return f'Count incremented to {count}', 200

# Route to handle GET requests
@app.route('/', methods=['GET'])
def get_count():
    count = read_count()
    return str(count)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True)

