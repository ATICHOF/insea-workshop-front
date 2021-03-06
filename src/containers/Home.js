import React from "react";
import "../styles/home.css";
import { useState } from "react";
import Modal from "./Modal";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="sidebar">
        <label className="title">FASTCAST</label>
        <div className="btnframe">
          <ul>
            <li className="vbtn">
              <img src={require("../assets/icons/video1.png")} alt="video" />
            </li>
            <li className="vbtn">
              <img src={require("../assets/icons/Audio.png")} alt="audio" />
            </li>
            <li className="vbtn">
              <img
                src={require("../assets/icons/statistic.png")}
                alt="statistics"
              />
            </li>
            <li className="vbtn">
              <img
                src={require("../assets/icons/setting.png")}
                alt="settings"
              />
            </li>
          </ul>
          <div className="logout">
            <img src={require("../assets/icons/logout.png")} alt="logout" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mainimage">
          <img src={require("../assets/images/empty.png")} alt="vide" />
        </div>
        <div className="textblc">
          <h1>You have no video</h1>
          <button className="adbtn" onClick={() => setOpen(true)}>
            Add video
          </button>
          <Modal isOpen={isOpen} close={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
