import React, { Component } from 'react';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import ChiefWardenNavBar from './ChiefWardenNavBar';

class CWGuardList extends Component {
  state = {
      guards: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/guard_chief_warden/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        this.setState({
            guards: JSON.parse(response.data[key])
        }); 
        this.renderTableData();
    }, (error) => {
      console.log(error);
    });
  }
  renderTableData = () => {
      for(var i=0; i<this.state.guards.length; i++){
          var table = document.getElementById("guards");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          cell1.innerHTML = this.state.guards[i].empid;
          cell2.innerHTML = this.state.guards[i].first_name.concat(" ").concat(this.state.guards[i].last_name);
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/view_guard/' + this.state.guards[i].empid +'"})()> Report </button>' ;
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/change_mgr/' + this.state.guards[i].empid +'"})()> Change </button>' ;
          cell5.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/delete_guard/' + this.state.guards[i].empid +'"})()> Delete </button>' ;
      }
  }
  HandleClick = () => {
    window.location.href = '/chief_warden/add_guard';
  } 
  render() {
    return (
    <div>
      <ChiefWardenNavBar/>
    <div className="List">
    <div className="ListHeader"> 
        Guard List 
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
    </div>
    <table id="guards" className='list-table'>
    <tr>
      <th> Guard ID </th>
      <th> Guard Name</th>
      <th> View Report</th>
      <th> Change Mgr </th>
      <th> Delete</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default CWGuardList;