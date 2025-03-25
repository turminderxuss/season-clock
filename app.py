from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    """
    Serve the main page of the Season Clock application.
    
    Returns:
        rendered template: The index.html template for the main page.
    """
    return render_template('index.html')

@app.context_processor
def inject_date():
    """
    Inject the current date into all templates.
    
    Returns:
        dict: A dictionary containing the current date.
    """
    return {'now': datetime.datetime.now()}

if __name__ == '__main__':
    app.run(debug=True)