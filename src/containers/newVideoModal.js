import Newvid from './newvid';
import "../styles/ModalVideo.css";

const VideoModal = ({show}) => {
    if (!show) return null;

    return (
    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-contents">
            <Newvid/>
        </div>
    </div>
    );
}
 
export default VideoModal;