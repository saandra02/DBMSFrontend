import React, { Component } from 'react';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import ChiefWardenNavBar from './ChiefWardenNavBar';

class CWChoreAssignments extends Component {
  state = {
      chores: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/chore_sheet/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Chore ".concat(user.prison_no);
        this.setState({
            chores: JSON.parse(response.data[key])
        }, ()=>this.renderTableData()); 
    }, (error) => {
      console.log(error);
    });
  }
  renderTableData = () => {
    var chores = this.state.chores;
    sessionStorage.setItem("chores", JSON.stringify(chores));
      for(var i=0; i<this.state.chores.length; i++){
          var table = document.getElementById("chores");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = this.state.chores[i].pid;
          cell2.innerHTML = this.state.chores[i].chore_name;
          cell3.innerHTML = this.state.chores[i].chore_time;
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/delete_chore_assignment/' + i + '"})()> Delete </button>';
      }
  }
  HandleClick = () => {
    window.location.href = '/chief_warden/add_chore_assignment';
  } 
  render() {
    return (
    <div>
      <ChiefWardenNavBar/>
    <div className="List">
    <div className="ListHeader"> 
        Prison Chore Schedule
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
    </div>
    <table id="chores" className='list-table'>
    <tr>
      <th> Prisoner ID </th>
      <th> Chore Name</th>
      <th> Chore Time</th>
      <th> Remove </th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default CWChoreAssignments;