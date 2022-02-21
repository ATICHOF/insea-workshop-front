import "../../styles/VideoCard.css";
import { useState } from "react";
import deleteModal from "../../containers/deleteModal";


const VideoCard = () => {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className="videoItem">
      <img
        className="img"
        src={require("../../assets/images/thumbnail.png")}
        alt=""
      />
      <div className="video-content">
        <div className="video-title">
          <h2>Sophia's Exclusive Birthday Photoshoot</h2>
        </div>
        <div className="btnvid">
          <button className="btn-edit">Edit</button>
          <button className="btn-delete" onClick={setOpened(true)}>Delete</button>
          
        </div>
      </div>
    </div>
  );
};
export default VideoCard;