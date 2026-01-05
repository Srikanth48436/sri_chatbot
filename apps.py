import os
import pickle, json, random
from flask import Flask, request, jsonify

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, "responses.json")) as f:
    responses = json.load(f)

model = pickle.load(open(os.path.join(BASE_DIR, "model.pkl"), "rb"))
vectorizer = pickle.load(open(os.path.join(BASE_DIR, "vectorizer.pkl"), "rb"))

@app.route("/", methods=["GET"])
def home():
    return "🤖 Sri ChatBot API is running"

@app.route("/chat", methods=["POST"])
def chat():
    user_msg = request.json.get("message", "").lower()
    vec = vectorizer.transform([user_msg])
    intent = model.predict(vec)[0]
    reply = random.choice(responses.get(intent, ["Sorry, I didn’t understand that."]))
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
