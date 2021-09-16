from flask import Flask,request
from flask_cors import CORS
from flask_mail import Mail, Message
from config import Config as config
app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER']=config.MAIL_SERVER
app.config['MAIL_PORT'] = config.MAIL_PORT
app.config['MAIL_USERNAME'] = config.MAIL_USERNAME
app.config['MAIL_PASSWORD'] = config.MAIL_PASSWORD
app.config['MAIL_USE_TLS'] = config.MAIL_USE_TLS
app.config['MAIL_USE_SSL'] = config.MAIL_USE_SSL
mail = Mail(app)

@app.route("/",methods=['POST','GET'])
def index():
  name = request.form.get('name')
  email = request.form.get('email')
  subject=request.form.get('subject')
  message = request.form.get('message')\
  
  print(request.form)

  # Create the plain-text and HTML version of your message
  html = f"""\
  <html>
  <body>
      
      <p>
      <strong style="font-size:20px;">name</strong>: {name}<br>
      <strong style="font-size:20px;">reply to</strong>: {email}<br> 
      <strong style="font-size:20px;">message</strong>: {message}<br>
      </p>
  </body>
  </html>
  """
  msg = Message(subject, sender = config.MAIL_USERNAME,html=html, recipients = [config.MAIL_USERNAME])

  msg.body = message
  mail.send(msg)
  return "Message sent!"

if __name__ == '__main__':
   app.run(debug = True)
