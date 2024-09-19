# Chatbot Interface

A simple React-based chat interface that mimics modern messaging platforms like Discord or Slack. This chatbot performs text transformations on user input and displays the results in a chat window.

## Features

- **User Interaction**: Send messages and receive responses from the bot.
- **Text Transformations**: Includes transformations such as:
  - Counting words
  - Reversing text
  - Converting text to uppercase
  - Removing vowels
  - Replacing spaces with underscores

## Getting Started

### Prerequisites

Make sure vite and npm is installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Naren9521/Chatbot.git
   cd Chatbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:3000` in your browser to see the app.

## Folder Structure 
  ```bash
 Chatbot/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
│       └── logo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   └── SideBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── LICENSE
```

### Component Breakdown

- **`ChatBox.jsx`**: Manages the chat interface, including message display and user input.
- **`Message.jsx`**: Renders individual chat messages from both the user and the bot.
- **`SideBar.jsx`**: Provides additional navigation or information (if applicable).

## Design Guidelines

- The interface resembles modern chat apps like Slack or Discord.
- User and bot messages are styled differently for clarity.
- Includes basic validation to ensure meaningful user input.

## License

This project is licensed under the MIT License.

## Colaborators
-**Narendra Singh Chauhan**
-**Anmol Kumar**


