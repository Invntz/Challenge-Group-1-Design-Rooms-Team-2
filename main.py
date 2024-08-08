from flask import Flask, render_template

server = Flask(__name__, static_folder='static', template_folder='templates')

if __name__ == "__main__":
    server.run(debug=True)