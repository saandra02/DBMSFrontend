import React, { Component } from 'react';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import ChiefWardenNavBar from './ChiefWardenNavBar';

class CWFacilityList extends Component {
  state = {
      facility: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/facility/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        this.setState({
            facility: JSON.parse(response.data[key])
        }, ()=>this.renderTableData()); 
    }, (error) => {
      console.log(error);
    });
  }
  renderTableData = () => {
    var facility = this.state.facility;
    sessionStorage.setItem("facility", JSON.stringify(facility));
      for(var i=0; i<this.state.facility.length; i++){
          var table = document.getElementById("facilities");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = this.state.facility[i].facility_name;
          cell2.innerHTML = this.state.facility[i].cost_per_unit_monthly;
          cell3.innerHTML = this.state.facility[i].count;
          cell4.innerHTML =  '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/delete_facility/' + i + '"})()> Remove </button>'
      }
  }
  HandleClick = () => {
    window.location.href = '/chief_warden/add_facility';
  } 
  render() {
    return (
    <div>
      <ChiefWardenNavBar/>
    <div className="List">
    <div className="ListHeader"> 
        Prison Facilities
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
    </div>
    <table id="facilities" className='list-table'>
    <tr>
      <th> Facility </th>
      <th> Monthly Cost Per Unit</th>
      <th> No. of Units</th>
      <th> Remove </th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default CWFacilityList;