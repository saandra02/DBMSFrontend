import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class PrisonerNavBar extends Component{
    HandleLogout = (e) => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");
    }
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to="/prisoner" className="sidebarlink">Profile</NavLink></li>
                    <li> <NavLink onClick={this.HandleLogout} to="/" className="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
             
        )

    } 

}

export default PrisonerNavBar;