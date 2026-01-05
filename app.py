from flask import Flask, request, jsonify
import pickle
import random
import json

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

with open("responses.json") as f:
    responses = json.load(f)

@app.route("/chat", methods=["POST"])
def chat():
    user_msg = request.json["message"]
    vec = vectorizer.transform([user_msg])
    intent = model.predict(vec)[0]
    reply = random.choice(responses[intent])
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run()
