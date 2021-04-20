import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class AdminNavBar extends Component{
    HandleLogout = (e) => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");
    }
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to="/admin" className="sidebarlink">Profile</NavLink></li>
                    <li>  <NavLink to="/admin/view_prisoners" className="sidebarlink">View Prisoners</NavLink></li>
                    <li> <NavLink to="/admin/view_guards" className="sidebarlink"> View Guards </NavLink></li>
                    <li> <NavLink to = "/admin/view_wardens" className = "sidebarlink"> View Wardens</NavLink></li>
                    <li> <NavLink to = "/admin/view_chief_wardens" className = "sidebarlink"> View Chief Wardens </NavLink></li>
                    <li> <NavLink to = "/admin/view_prisons" className = "sidebarlink"> Prisons and Expenditure </NavLink></li>
                    <li> <NavLink to = "/admin/prison_shift" className = "sidebarlink"> Prison Shift </NavLink></li>
                    <li> <NavLink onClick={this.HandleLogout} to="/" className="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default AdminNavBar;