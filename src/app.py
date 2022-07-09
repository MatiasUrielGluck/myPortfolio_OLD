from flask import Flask, render_template, request
from flask_mail import Mail, Message
from private import *

app = Flask(__name__)

# configuration of mail
mail = Mail(app)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = USERNAME
app.config['MAIL_PASSWORD'] = PASSWORD
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sendmail', methods=['POST'])
def send_mail():
    name = request.form.get('name')
    email = request.form.get('email')
    msg_body = f'Contact from: {name}, {email}\n\n'
    msg_body += request.form.get('message')
    msg = Message('Contact From my Porfolio', sender = USERNAME, recipients = [USERNAME])
    msg.body = msg_body
    mail.send(msg)

    return render_template('mail_sent.html', name=name)
    

if __name__ == '__main__':
    app.run(debug = True)