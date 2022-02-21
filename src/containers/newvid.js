import React from "react";
import Input from "../components/ui/input";
import "../styles/newvid.css";
const Newvid = () => {
  return (
    <div className="newvid">
      <p className="p1">New Video</p>
      <a href="/home" className="close">
        <img alt="close" src={require("../assets/icons/Close.png")} />
      </a>
      <div className="title">
        <Input name={"Title (Required)"} />
        <label>Description</label>
        <br />
        <textarea className="textarea" />
        <div className="thumb">
          <p className="thumbtext">Thumbnails</p>
          <img
            alt="frame"
            className="thumbimage"
            src={require("../assets/images/Frame 850.png")}
          />
        </div>
      </div>
      <div className="footer">
        <button className="btun">save</button>
      </div>
      <div className="video"></div>
    </div>
  );
};

export default Newvid;
