import Dblock  from './delete'
const deleteModal = ({isOpen, close}) => {
    if (!isOpen) return null;
    return ( 
    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <Dblock/>
        </div>
    </div>);
}
export default deleteModal;