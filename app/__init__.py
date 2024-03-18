from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route('/Rian')
    def hello_world():
        print('rian testing')
        return 'Hello, Rian Tito!'

    return app
