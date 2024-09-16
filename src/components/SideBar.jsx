import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faHashtag, faComments } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ toggleTheme }) => {
  return (
    <div className="sidebar">
      <div className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faAdjust} />
        <span>Toggle Theme</span>
      </div>
      <div className="channels">
        <FontAwesomeIcon icon={faHashtag} />
        <span>  Announcements</span>
      </div>
      <div className="threads">
        <FontAwesomeIcon icon={faComments} />
        <span>  Web-development</span>
      </div>
      <div className="user">
        <img src="/src/assets/Images/sitare.jpeg" alt="User profile" />
        <span>Anmol/Narendra</span>
      </div>
    </div>
  );
};

export default Sidebar;
