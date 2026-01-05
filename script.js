function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const message = input.value.trim();

    if (message === "") return;

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "user-msg";
    userDiv.innerText = message;
    chatBox.appendChild(userDiv);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fake AI typing
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "bot-msg";
        botDiv.innerText = "Thinking...";
        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            botDiv.innerText = getBotReply(message);
        }, 800);
    }, 500);
}

// Simple AI brain (replace later with ML backend)
function getBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) {
        return "Hello Sri 👋 How can I help you?";
    }
    if (msg.includes("who are you")) {
        return "I am Sri, your AI assistant 🤖";
    }
    if (msg.includes("help")) {
        return "I can chat with you like ChatGPT. Soon I’ll be smarter!";
    }
    if (msg.includes("bye")) {
        return "Goodbye Sri 👋 Take care!";
    }

    return "That's interesting 🤔 Tell me more.";
}







function getBotReply(msg) {
    msg = msg.toLowerCase();

    for (let data of dataset) {
        for (let tag of data.tags) {
            if (msg.includes(tag)) {
                return data.replies[Math.floor(Math.random() * data.replies.length)];
            }
        }
    }

    // Smart fallback (ChatGPT-like)
    const fallbackReplies = [
        "That’s interesting 🤔 Tell me more.",
        "I see. Can you explain a bit?",
        "Hmm… let’s talk about that.",
        "I’m listening 👂"
    ];

    return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
}
