from flask import Flask, render_template, send_from_directory
import os

server = Flask(__name__, static_folder='front-end\src\assets', template_folder='front-end')

    
@server.route("/")
def index():
    return render_template('/index.html')

# @server.route('/<path:path>')
# def static_proxy(path):
#     file_path = os.path.join(server.static_folder, path)
#     if os.path.exists(file_path):
#         return send_from_directory(server.static_folder, path)
#     else:
#         return render_template('index.html')


if __name__ == "__main__":
    server.run(debug=True)
# this is a test