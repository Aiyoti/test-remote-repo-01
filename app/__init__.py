from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route('/satya')
    def hello_world():
        print(f"Hello, Satya!")
        return 'Hello, Satya!'

    return app

