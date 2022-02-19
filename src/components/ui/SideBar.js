import '../../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
const Sidebar = () => {
    return (  
        <div className="sidebar-main">
            <div className="menu">
                <div className="sidebar-logo">
                    FASTCAST
                </div>
                <div className="sidebar-content">
                    <ul className='sidebar-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                    <li key={index} className={item.cName}>
                                        <div to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                    </li>
                                );
                        })}
                    </ul>
                </div>
            </div>
    </div>
    
    );
}
export default Sidebar;