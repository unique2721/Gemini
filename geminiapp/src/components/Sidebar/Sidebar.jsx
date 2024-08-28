import React, { useState } from "react";
/* css stylesheet */
import "./sidebar.css";
/* images */
import menu from "../../assets/menu.png";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";
import help from "../../assets/help.png";
import settings from "../../assets/settings.png";
import activity from "../../assets/activity.png";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img
            onClick={() => setCollapse((prev) => !prev)}
            title="menu"
            src={menu}
            alt="menu"
          />
        </div>
        <div className="new-chat">
          <img src={plus} alt="add" />
          {collapse ? <p>New Chat</p> : null}
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={message} alt="chat here" />
            {collapse ? <p>React overview</p> : null}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={help} alt="help" />
          {collapse ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={activity} alt="help" />
          {collapse ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={settings} alt="help" />
          {collapse ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
