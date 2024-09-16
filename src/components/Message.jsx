import React from 'react';

function Message({ username, text, avatar }) {
  return (
    <div className="message">
      <img src={avatar} alt="User avatar" />
      <div className="content">
        <div className="username">{username}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Message;
