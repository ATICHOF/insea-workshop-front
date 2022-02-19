import Sidebar from "../components/ui/Sidebar";
import EmptyCard from "../components/ui/EmptyCard";
import '../styles/EmptyMain.css'
const EmptyMain = () => {
    return ( 
        <div className="main-page">
            <Sidebar className="<side-bar>"/>
            <div className="content">
            <EmptyCard className="empty-card" />
            <button className = "add-video">Add Video</button>
            </div>
        </div>
    );
}
export default EmptyMain;