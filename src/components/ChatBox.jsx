import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message) {
      addMessage("You", message, "/src/assets/Images/user.jpeg", "user");
      input.value = "";

      setTimeout(() => {
        addMessage("Bot", "This is an automatic response!", "/src/assets/Images/chatbot.png", "bot");
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
        <img src="/src/assets/Images/chatbot.png" alt="Group profile" />
        <span className="title">My chatbot</span>
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
