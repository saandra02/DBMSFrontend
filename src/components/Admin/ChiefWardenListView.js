import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";

class AdminCWListView extends Component {
  state = {
      guards: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/chief_warden_admin/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Admin ".concat(user.empid);
        this.setState({
            guards: JSON.parse(response.data[key])
        }); 
        this.renderTableData();
    }, (error) => {
      console.log(error);
    });
  }
  func1() {
    console.log("In function 1 ");
  }
  renderTableData = () => {
      for(var i=0; i<this.state.guards.length; i++){
          var table = document.getElementById("guards");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = this.state.guards[i].empid;
          cell2.innerHTML = this.state.guards[i].first_name.concat(" ").concat(this.state.guards[i].last_name);
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/view_chief_warden/' + this.state.guards[i].empid +'"})()> Report </button>' ;
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/delete_chief_warden/'+this.state.guards[i].empid+'"})()> Delete </button>' ;
      }
  } 
  HandleClick = () => {
    window.location.href = '/admin/add_chief_warden';
  }
  render() {
    return (
    <div> 
    <AdminNavBar/> 
    <div className="List">
    <div className="ListHeader"> 
      Chief Warden List
      <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
      </IconContext.Provider>
    </div>
    <table id="guards" className='list-table'>
    <tr>
      <th> Chief Warden ID </th>
      <th> Chief Warden Name</th>
      <th> View</th>
      <th> Delete</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default AdminCWListView;