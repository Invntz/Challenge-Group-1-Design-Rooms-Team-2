from flask import Flask, render_template, send_from_directory
import os

server = Flask(__name__, static_folder='front-end\src\assets', template_folder='front-end')

    
@server.route("/")
def index():
    return render_template('/index.html')



if __name__ == "__main__":
    server.run(debug=True)
# this is a test