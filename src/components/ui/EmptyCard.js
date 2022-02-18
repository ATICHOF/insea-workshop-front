import '../../styles/EmptyCard.css';
const EmptyCard= () => {
    return ( 
        <div className="empty-card">
            <img className="img" src="./empty.png"  alt=""/>
            <h1>You have no video!</h1>
            <p>Sorry, you don't have any video yet. Click add video to upload new one!.</p>
        </div>
        
    );
}
export default EmptyCard;