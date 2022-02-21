import "../../styles/VideoCard.css";

const VideoCard = () => {
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
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
