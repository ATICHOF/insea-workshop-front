import "../styles/Modal.css"
import Updatevid from "./Updatevid";

const Modal = ({isOpen, close}) => {
    if(!isOpen) return null;
    return (
        
        <div className="modal">
        <div className="overlay"></div>
            <div className="modal-content">
                <Updatevid/>
            </div>
        
    </div>
    );
}
export default Modal;