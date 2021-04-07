import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class GuardNavBar extends Component{
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to="/guard" class="sidebarlink">Profile</NavLink></li>
                    <li>  <NavLink to="/view_prisoners" class="sidebarlink">View Prisoners</NavLink></li>
                    <li> <NavLink to="/" class="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default GuardNavBar;