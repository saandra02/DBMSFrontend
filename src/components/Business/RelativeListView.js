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
    var url = '/business_registered';
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Business 100";
        this.setState({
            business: JSON.parse(response.data[key])
        }, ()=> this.renderTableData()); 
    }, (error) => {
      console.log(error);
    });
  }
  renderTableData = () => {
      for(var i=0; i<this.state.business.length; i++){
          var table = document.getElementById("chores");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = this.state.business[i].bname;
          cell2.innerHTML = this.state.business[i].number_required;
          cell3.innerHTML = this.state.business[i].number_employed;
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/chief_warden/view_business/' + this.state.business[i].bid +'"})()> Report </button>';
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
        Registered Businesses 
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
    </div>
    <table id="chores" className='list-table'>
    <tr>
      <th> Business Name </th>
      <th> No. Required</th>
      <th> No. Employed</th>
      <th> View Details</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default CWRelativeList;