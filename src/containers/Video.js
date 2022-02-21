import React, { useState } from "react";
import VideoCard from "../components/ui/VideoCard";
import "../styles/home.css";
import Modal from "./Modal";

const Videos = () => {
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
        <div className="header">
          <label className="title">Videos</label>
          <button className="newbtn" onClick={() => setOpen(true)}>
            Add video
          </button>
        </div>
        <div className="listvid">
          <Modal isOpen={isOpen} close={() => setOpen(false)} />
          <ul className="videos-cd">
            <li className="cd-vd">
              <>
                <VideoCard />
              </>
            </li>
            <li className="cd-vd">
              <>
                <VideoCard />
              </>
            </li>
            <li className="cd-vd">
              <>
                <VideoCard />
              </>
            </li>
            <li className="cd-vd">
              <>
                <VideoCard />
              </>
            </li>
            <li className="cd-vd">
              <>
                <VideoCard />
              </>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Videos;
