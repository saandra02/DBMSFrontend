import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class PrisonerNavBar extends Component{
    state = {
        link: "/prisoner/1001"
    }
    render(){
        return (
            <div className="navbar">
                <ul className="navbar">
                    <li>  <NavLink to={this.state.link} class="sidebarlink">View Details</NavLink></li>
                    <li> <NavLink to="/" class="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default PrisonerNavBar;