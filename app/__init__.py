from flask import Flask, render_template


def create_app():
    app = Flask(__name__)

    @app.route('/satya')
    def hello_world():
        print(f"Hello, Satya!")
        return 'Hello, Satya!'

    @app.route("/")
    def index():
        return render_template("index.html")
    return app


