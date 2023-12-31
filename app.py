import os
from flask import Flask, render_template, request
import random
from transformers import pipeline



os.environ['SENTENCE_TRANSFORMERS_HOME'] = './.cache'


pipe = pipeline("translation", model="Helsinki-NLP/opus-mt-en-fi")

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
   translation_request = request.form["translation_request" ]

   random_number = random.randint(0,100)

   return f'{translation_request}. Ja luku: {random_number}'

if __name__ == '__main__':
   app.run(debug=True)
