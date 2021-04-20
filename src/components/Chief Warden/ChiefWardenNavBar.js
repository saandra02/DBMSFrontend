import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class ChiefWardenNavBar extends Component{
    HandleLogout = (e) => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user");
    }
    render(){
        return (
            <div>
                <ul className="navbar">
                    <li>  <NavLink to="/chiefwarden" className="sidebarlink">Profile</NavLink></li>
                    <li>  <NavLink to="/chief_warden/view_prisoners" className="sidebarlink">View Prisoners</NavLink></li>
                    <li> <NavLink to="/chief_warden/view_guards" className="sidebarlink"> View Guards </NavLink></li>
                    <li> <NavLink to="/chief_warden/view_wardens" className="sidebarlink"> View Wardens</NavLink></li>
                    <br/>
                    <li> <NavLink to="/chief_warden/view_businesses" className="sidebarlink"> View Businesses </NavLink></li>
                    <li> <NavLink to="/chief_warden/view_relatives" className="sidebarlink"> View Relatives </NavLink></li>
                    <li> <NavLink to="/chief_warden/view_chores" className="sidebarlink"> View Chores </NavLink></li>
                    <li> <NavLink to="/chief_warden/view_chore_assignments" className="sidebarlink"> Assign Chores </NavLink></li>
                    <li> <NavLink to="/chief_warden/view_facilities" className="sidebarlink"> View Facilities </NavLink></li>
                    <br/>
                    <li> <NavLink to="/chief_warden/visit_sheet" className="sidebarlink"> Visit History </NavLink></li>
                    <li> <NavLink to="/chief_warden/expense_report" className="sidebarlink"> Expense Report </NavLink></li>
                    <li> <NavLink onClick={this.HandleLogout} to="/" className="sidebarlink">Logout</NavLink></li> 
                </ul>
            </div>
            
        )

    } 

}

export default ChiefWardenNavBar;