import React, { Component } from 'react';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import ChiefWardenNavBar from './ChiefWardenNavBar';

class CWRelativeList extends Component {
  state = {
      relatives: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/relative_prison/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        this.setState({
            relatives: JSON.parse(response.data[key])
        }, ()=> this.renderTableData()); 
    }, (error) => {
      console.log(error);
    });
  }
  renderTableData = () => {
      for(var i=0; i<this.state.relatives.length; i++){
          var table = document.getElementById("chores");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          cell1.innerHTML = this.state.relatives[i].rid;
          cell2.innerHTML = this.state.relatives[i].first_name.concat(" ").concat(this.state.relatives[i].last_name);
          cell3.innerHTML = "Prisoner #".concat(this.state.relatives[i].pid);
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/view_relative/' + this.state.relatives[i].rid +'"})()> Report </button>';
          cell5.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/delete_relative/' + this.state.relatives[i].rid +'"})()> Delete </button>';
      }
  }
  HandleClick = () => {
    window.location.href = '/chief_warden/add_relative';
  } 
  render() {
    return (
    <div>
      <ChiefWardenNavBar/>
    <div className="List">
    <div className="ListHeader"> 
        Registered Relatives
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
    </div>
    <table id="chores" className='list-table'>
    <tr>
      <th> Relative ID </th>
      <th> Name </th>
      <th> Related To</th>
      <th> View Details</th>
      <th> Delete</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default CWRelativeList;