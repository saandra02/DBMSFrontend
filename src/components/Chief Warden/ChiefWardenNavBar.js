import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class ChiefWardenNavBar extends Component{
    HandleLogout = (e) => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");
    }
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to="/guard" className="sidebarlink">Profile</NavLink></li>
                    <li>  <NavLink to="/" className="sidebarlink">View Prisoners</NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink"> View Guards </NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink"> View Wardens</NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink"> Assign Chores </NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink"> View Facilities </NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink"> Create Expense Report </NavLink></li>
                    <li> <NavLink onClick={this.HandleLogout} to="/" className="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default ChiefWardenNavBar;