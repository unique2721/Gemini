import React from "react";
import "./Main.css";
import profile from "../../assets/profile.jpeg";
import youtube from "../../assets/youtube.svg";
import explore from "../../assets/explore.png";
import music from "../../assets/music.png";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={profile} alt={"profile"} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, User</span>
          </p>
          <p>Ho can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <img src={youtube} alt="youtube" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <img src={explore} alt="explore" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <img src={music} alt="music" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <img src={explore} alt="explore" />
          </div>
        </div>
        <div className="review">
          <p>
            Humans review some saved chats to improve Google AI. To stop this
            for future chats, turn off Gemini Apps Activity. If this setting is
            on, don't enter info you wouldn’t want reviewed or used.{" "}
            <a href="">How it works</a>
          </p>
          <button>Manage Activity</button>
          <button>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
