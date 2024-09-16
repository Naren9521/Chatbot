import React from "react";
 
const ChatBody = ({ messages }) => {
  return (
    <div className="chat-body">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          {message.type === "received" && (
            <img alt="Chatbot" src="src/assets/Images/chatbot.png" width="30" height="30" />
          )}
          <div className="content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
