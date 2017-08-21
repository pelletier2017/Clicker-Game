from flask import Flask, render_template, redirect
from flask_security import (login_required, Security, current_user,
                            SQLAlchemySessionUserDatastore)
from database import db_session, init_db
from models import User, Role, ExtendedRegisterForm

# setup flask
app = Flask(__name__)
app.config["SECURITY_REGISTERABLE"] = True

# following not secure for production
app.config["SECRET_KEY"] = "super-secret"
app.config['SECURITY_PASSWORD_HASH'] = 'bcrypt'
app.config['SECURITY_PASSWORD_SALT'] = '$2a$16$PnnIgfMwkOjGX4SkHqSOPO'

# following for development only
app.config['DEBUG'] = True
app.config['SECURITY_SEND_REGISTER_EMAIL'] = False


# Setup Flask-Security
user_datastore = SQLAlchemySessionUserDatastore(db_session, User, Role)
security = Security(app, user_datastore, register_form=ExtendedRegisterForm)


# Initialize the database
@app.before_first_request
def create_user():
    init_db()
    init_email = 'admin'
    init_user = user_datastore.find_user(email=init_email)
    # if user already exists, do nothing
    if init_user is None:
        user_datastore.create_user(email=init_email, username='admin',
                                   password='password')
        db_session.commit()


# Views
@app.route("/")
@app.route("/index")
@login_required
def index():
    return render_template("clicker.html", user=current_user)


# temporary home page to preview bootstrap
@app.route("/home")
def home():
    return render_template("bootstrap_index.html")


# example code for later use
"""
@app.route("/clicker/<user_id>")
@login_required
def clicker(user_id):
    user_id = User.query.filter_by(id=user_id).first()
    return render_template("clicker.html", id=user_id)


# code from tutorial, not sure how to use it in current iteration
@app.route("/post_user", methods=["POST"])
def post_user():
    user = User(request.form["email"], request.form["password"])
    db.session.add(user)
    db.session.commit()
    return redirect(url_for("index"))
"""

if __name__ == "__main__":
    app.run()
