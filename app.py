from flask import Flask, render_template, request, redirect, url_for
from flask_security import (login_required, Security, current_user,
                           SQLAlchemySessionUserDatastore)
from database import db_session, init_db
from models import User, Role

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:kappa123@localhost/ChessUsers"
app.config["SECRET_KEY"] = "super-secret"   # not secure
app.config["SECURITY_REGISTERABLE"] = True
app.config['SECURITY_PASSWORD_HASH'] = 'bcrypt'  # not secure
app.config['SECURITY_PASSWORD_SALT'] = '$2a$16$PnnIgfMwkOjGX4SkHqSOPO'  # not secure
app.config['DEBUG'] = True
app.config['SECURITY_SEND_REGISTER_EMAIL'] = False


# Setup Flask-Security
user_datastore = SQLAlchemySessionUserDatastore(db_session, User, Role)
security = Security(app, user_datastore)

"""
### Un-comment when setting up database for first time
# Create a user to test with
@app.before_first_request
def create_user():
    init_db()
    user_datastore.create_user(email='matt@nobien.net', password='password')
    db_session.commit()
"""


# Views
@app.route("/")
@login_required
def index():
    return render_template("clicker.html", user=current_user)


# example code for later use
@app.route("/clicker/<user_id>")
@login_required
def clicker(user_id):
    user_id = User.query.filter_by(id=user_id).first()
    return render_template("clicker.html", id=user_id)


@app.route("/post_user", methods=["POST"])
def post_user():
    user = User(request.form["email"], request.form["password"])
    db.session.add(user)
    db.session.commit()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run()
