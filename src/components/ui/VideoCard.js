import "../../styles/VideoCard.css";

const VideoCard = ({ onchang }) => {
  const handleOnClick = (e) => {
    if (onchang) {
      onchang(e.target.value);
    }
    return null;
  };
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
          <button className="btn-delete" onClick={handleOnClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
