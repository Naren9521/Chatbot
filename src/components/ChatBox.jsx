import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import userImage from '../assets/images/user.jpeg'; 
import botImage from '../assets/images/chatbot.png';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Function to randomly choose a transformation and apply it
  const applyRandomTransformation = (text) => {
    const transformations = [
      { name: "Word Count", func: (t) => `Word Count: ${t.split(' ').length}` },
      { name: "Vowel Count", func: (t) => `Vowel Count: ${t.match(/[aeiou]/gi)?.length || 0}` },
      { name: "Consonant Count", func: (t) => `Consonant Count: ${t.match(/[^aeiou\s\d\W]/gi)?.length || 0}` },
      { name: "Most Frequent Letter", func: (t) => {
        const freq = {};
        t.replace(/[^\W_]/g, letter => {
          freq[letter] = (freq[letter] || 0) + 1;
        });
        const mostFrequent = Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b, '');
        return `Most Frequent Letter: ${mostFrequent}`;
      }},
      { name: "Reverse Text", func: (t) => `Reversed: ${t.split('').reverse().join('')}` },
      { name: "Uppercase", func: (t) => `Uppercase: ${t.toUpperCase()}` },
      { name: "Lowercase", func: (t) => `Lowercase: ${t.toLowerCase()}` },
      { name: "Capitalize Each Word", func: (t) => `Capitalized: ${t.replace(/\b\w/g, char => char.toUpperCase())}` },
      { name: "Character Count", func: (t) => `Character Count: ${t.length}` },
      { name: "Remove Vowels", func: (t) => `Without Vowels: ${t.replace(/[aeiou]/gi, '')}` },
      { name: "Remove Consonants", func: (t) => `Without Consonants: ${t.replace(/[^aeiou\s]/gi, '')}` },
      { name: "Repeat Words", func: (t) => `Repeated Words: ${t.split(' ').map(word => `${word} ${word}`).join(' ')}` },
      { name: "Replace Spaces with Underscores", func: (t) => `Underscores: ${t.replace(/\s+/g, '_')}` },
      { name: "Shuffle Characters", func: (t) => {
        const shuffle = (word) => word.split('').sort(() => 0.5 - Math.random()).join('');
        return `Shuffled: ${t.split(' ').map(shuffle).join(' ')}`;
      }}
    ];

    const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
    return `${randomTransformation.name}: ${randomTransformation.func(text)}`;
  };

  const sendMessage = () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message) {
      addMessage("You", message, userImage, "user");
      input.value = "";

      // Generate a random bot name
      const botNames = ["AlphaBot", "BetaBot", "GammaBot", "DeltaBot", "EpsilonBot"];
      const randomBotName = botNames[Math.floor(Math.random() * botNames.length)];

      setTimeout(() => {
        const response = applyRandomTransformation(message);
        addMessage(randomBotName, response, botImage, "bot");
      }, 1000);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action (e.g., form submission)
      sendMessage();
    }
  };

  const addMessage = (username, text, avatar, type) => {
    const newMessage = { username, text, avatar, type };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="main">
      <div className="header">
        <img src={botImage} alt="Group profile" />
        <span className="title">My Chatbot</span>
      </div>
      <div className="chat" id="chat-box">
        {messages.map((message, index) => (
          <div className={`message ${message.type}`} key={index}>
            <img src={message.avatar} alt="User avatar" />
            <div className="content">
              <div className="username">{message.username}</div>
              <div className="text">{message.text}</div>
            </div>
          </div>
        ))}
        {/* Scroll to bottom reference */}
        <div ref={chatEndRef} />
      </div>
      <div className="footer">
        <input
          type="text"
          id="message-input"
          placeholder="Type your message"
          onKeyDown={handleKeyDown} // Add the event listener here
        />
        <div className="icons">
          <FontAwesomeIcon icon={faPaperPlane} onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
