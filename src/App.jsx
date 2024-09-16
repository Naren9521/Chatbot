import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import "./App.css"

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    if (message.trim()) {
      const userMessage = { type: "sent", content: message };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setTimeout(() => {
        const botMessage = { type: "received", content: "Hey " + message };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
