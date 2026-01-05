const dataset = [
  // Greetings
  {
    tags: ["hi", "hello", "hey", "good morning", "good evening"],
    replies: [
      "Hello Sri 👋",
      "Hey! How can I help you today?",
      "Hi 😊 What’s on your mind?"
    ]
  },

  // Identity
  {
    tags: ["who are you", "your name", "what is your name"],
    replies: [
      "I am Sri, your AI assistant 🤖",
      "You can call me Sri.",
      "Sri here — always ready to help."
    ]
  },

  // Capabilities
  {
    tags: ["what can you do", "help", "your features"],
    replies: [
      "I can chat with you like ChatGPT.",
      "I can answer questions and keep conversations.",
      "I’m an offline AI assistant built using ML concepts."
    ]
  },

  // Emotions
  {
    tags: ["i am sad", "feeling low", "depressed", "not feeling good"],
    replies: [
      "I’m sorry you’re feeling this way 💙",
      "Want to talk about what’s bothering you?",
      "You’re not alone. I’m here."
    ]
  },

  {
    tags: ["i am happy", "feeling good", "excited"],
    replies: [
      "That’s great to hear 😄",
      "Awesome! Keep smiling 🌟",
      "Nice! What made you happy?"
    ]
  },

  // Motivation
  {
    tags: ["motivate me", "inspire me", "feeling demotivated"],
    replies: [
      "Small steps every day lead to big success.",
      "Don’t give up. You’re doing better than you think.",
      "Discipline beats motivation — keep going."
    ]
  },

  // Tech / AI
  {
    tags: ["what is ai", "artificial intelligence"],
    replies: [
      "AI is the simulation of human intelligence by machines.",
      "Artificial Intelligence enables machines to think and learn."
    ]
  },

  {
    tags: ["what is machine learning", "ml"],
    replies: [
      "Machine Learning allows systems to learn from data.",
      "ML is a subset of AI focused on learning patterns."
    ]
  },

  // Programming
  {
    tags: ["what is python", "python language"],
    replies: [
      "Python is a high-level programming language.",
      "Python is widely used in ML, AI, and web development."
    ]
  },

  {
    tags: ["what is javascript", "js"],
    replies: [
      "JavaScript is used to build interactive web applications.",
      "JS runs in the browser and handles frontend logic."
    ]
  },

  // Daily chat
  {
    tags: ["how are you"],
    replies: [
      "I’m doing great 😄 Thanks for asking!",
      "All good! How about you?"
    ]
  },

  // Time & Date (frontend)
  {
    tags: ["time"],
    replies: [new Date().toLocaleTimeString()]
  },

  {
    tags: ["date", "today"],
    replies: [new Date().toDateString()]
  },

  // Goodbye
  {
    tags: ["bye", "exit", "quit", "goodbye"],
    replies: [
      "Goodbye Sri 👋",
      "Take care! See you again.",
      "Bye! Have a great day 😊"
    ]
  }
];
