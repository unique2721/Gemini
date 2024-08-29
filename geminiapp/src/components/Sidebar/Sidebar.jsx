import React, { useContext, useState } from "react";
/* css stylesheet */
import "./sidebar.css";
/* images */
import menu from "../../assets/menu.png";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";
import help from "../../assets/help.png";
import settings from "../../assets/settings.png";
import activity from "../../assets/activity.png";

/* context */
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true);
  const {
    onSent,
    previousPrompts,
    setPreviousPropmpts,
    setRecentPrompts,
    newChat,
  } = useContext(Context);

  const menuToggler = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img
            onClick={() => menuToggler()}
            title="menu"
            src={menu}
            alt="menu"
          />
        </div>

        <div onClick={() => newChat()} className="new-chat">
          <img src={plus} alt="add" />
          {collapse ? <p>New Chat</p> : null}
        </div>
        {collapse ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts ? (
              previousPrompts.map((prompt, index) => (
                <div className="recent-entry" key={index}>
                  <img src={message} alt="chat here" />
                  <p>{prompt.slice(0, 18)}...</p>
                </div>
              ))
            ) : (
              <div className="recent-entry">
                <img src={message} alt="chat here" />
                {collapse ? <p>Recent overview</p> : null}
              </div>
            )}
          </div>
        ) : null}
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
