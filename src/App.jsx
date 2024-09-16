import React from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

import "./App.css";

const App = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
  };

  return (
    <div className="container">
      <Sidebar toggleTheme={toggleTheme} />
      <ChatBox />
    </div>
  );
};

export default App;
