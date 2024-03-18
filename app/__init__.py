from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def hello_world():
        return 'Hello, World!'
    
    @app.route('/yasser')
    def hello_heaven():
        return 'Hello, Heaven!'

    return app
