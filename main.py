from flask import Flask, render_template

server = Flask(__name__, static_folder='static', template_folder='templates')

