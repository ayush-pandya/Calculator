import React,{Component} from "react";
import "./dashboard.css"
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <div id="dashboard">
            <div className="dashboard-title">
                <i className="fa-solid fa-table-columns icon"></i>
                <span className="dashboard-text pl-1">Dashboard</span>
                </div>
                <ul className="nav-links">
                    <li className="nav-link">
                        <i className="fa-solid fa-house icon"></i>
                        <div className="span">Home</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-user icon"></i>
                        <div className="span">Profile</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-message icon"></i>
                        <div className="span">Messages</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-clock icon"></i>
                        <div className="span">History</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-note-sticky icon"></i>
                        <div className="span">Tasks</div>
                    </li>
                </ul>
                <ul className="nav-links">
                    <li className="nav-link">
                        <i className="fa-solid fa-people-group icon"></i>
                        <div className="span">Communities</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-sharp fa-solid fa-gear icon"></i>
                        <div className="span">Settings</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-phone icon"></i>
                        <div className="span">Support</div>
                    </li>
                    <li className="nav-link">
                        <i className="fa-solid fa-shield icon"></i>
                        <div className="span">Privacy</div>
                    </li>
                </ul>
            
        </div>
        </React.Fragment> 
        );
    }
}
 
export default Dashboard;