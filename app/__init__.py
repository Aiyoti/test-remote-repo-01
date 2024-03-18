from flask import Flask


def create_app():
    app = Flask(__name__)

    @app.route('/Rian')
    def hello_world():
<<<<<<< HEAD
        print('rian testing')
        return 'Hello, Rian Tito!'
=======
        print("eko testing")
        return 'Hello, World!'
    
    @app.route('/yasser')
    def hello_heaven():
        return 'Hello, Heaven!'
>>>>>>> 9f654e7de740b8bdea334ac7f19a7a241dbd2e82

    return app
