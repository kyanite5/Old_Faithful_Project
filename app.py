#  import Flask
from flask import Flask, render_template
print(type(render_template))
# Create an app, being sure to pass __name__
app = Flask(__name__)


#  Define what to do when a user hits the index route
@app.route('/')
def index():
    '''Return the homepage.'''
    return render_template('index.html')

#  Define what to do when a user accesses Machine Learning route
@app.route("/ml")
def ml():
    return render_template('machinelearning.html')

#  Define what to do when a user accesses Resources route
@app.route("/references")
def resources():
    return render_template('references.html')

#  Define what to do when a user accesses Data route


if __name__ == "__main__":
    app.run(debug=True)
