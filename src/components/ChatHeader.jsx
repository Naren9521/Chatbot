import React from "react";
const ChatHeader = () => {
  return (
    <div className="chat-header">
      <img alt="User profile" src="src/assets/Images/chatbot.png" height="40" width="40" />
      <div>
        <div>Anmol/Narendra</div>
        <div className="status">Online</div>
      </div>
      <div className="options">
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
