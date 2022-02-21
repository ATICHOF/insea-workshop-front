import Dblock  from './delete'
import "../styles/deleteModal.css";
const DeleteModal = ({isOpen, close}) => {
    if (!isOpen) return null;
    return ( 
    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <Dblock/>
        </div>
    </div>);
}
export default DeleteModal;