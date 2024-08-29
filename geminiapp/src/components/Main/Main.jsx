import React, { useContext } from "react";
import "./Main.css";
import profile from "../../assets/profile.jpeg";
import youtube from "../../assets/youtube.svg";
import explore from "../../assets/explore.png";
import music from "../../assets/music.png";
import upload from "../../assets/upload.png";
import voicerecord from "../../assets/voicerecord.jpeg";
import send from "../../assets/send.png";
import gemini from "../../assets/gemini.png";
/* context */
import { Context } from "../../context/Context";

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    resultData,
    showResultData,
    loading,
    onSent,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={profile} alt={"profile"} />
      </div>
      {!showResultData ? (
        <>
          <div className="main-container">
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt
                </p>
                <img src={youtube} alt="youtube" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt
                </p>
                <img src={explore} alt="explore" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt
                </p>
                <img src={music} alt="music" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt
                </p>
                <img src={explore} alt="explore" />
              </div>
            </div>
            <div className="review">
              <p>
                Humans review some saved chats to improve Google AI. To stop
                this for future chats, turn off Gemini Apps Activity. If this
                setting is on, don't enter info you wouldn’t want reviewed or
                used. <a href="">How it works</a>
              </p>
              <div className="btn">
                <button>Manage Activity</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={profile} alt="user profile" />
            <p>{recentPrompt}</p>
          </div>
          {loading ? (
            <div className="loading">
              <h1>Loading...</h1>
              <hr />
              <hr />
              <hr />
            </div>
          ) : (
            <div className="result-data">
              <img src={gemini} alt="gemini" />
              <p>{resultData}</p>
            </div>
          )}
        </div>
      )}
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Enter a prompt here"
          />
          <div className="icons">
            <img src={upload} alt="upload" />
            <img src={voicerecord} alt="record" />
            <img onClick={() => onSent()} src={send} alt="send" />
          </div>
        </div>
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. <a href="">Your privacy & Gemini Apps</a>
        </p>
      </div>
    </div>
  );
};

export default Main;
