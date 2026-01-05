import pickle, json, random
from memory import update_context

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

with open("intents.json") as f:
    intents = json.load(f)

def predict_intent(text):
    vec = vectorizer.transform([text])
    return model.predict(vec)[0]

print("🤖 Sri ChatBot is running (type 'bye' to exit)\n")

while True:
    user = input("You: ").lower()

    intent = predict_intent(user)
    update_context(intent)

    response = random.choice(intents[intent]["responses"])
    print("Sri:", response)

    if intent == "bye":
        break













