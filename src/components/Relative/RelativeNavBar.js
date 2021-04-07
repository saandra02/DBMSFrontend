import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class RelativeNavBar extends Component{
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to="/relative" className="sidebarlink">Profile</NavLink></li>
                    <li> <NavLink to="/" className="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default RelativeNavBar;