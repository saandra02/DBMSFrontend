import React, { Component } from 'react';
import axios from 'axios';
import BusinessNavBar from './BusinessNavBar';

class PrisonerBusList extends Component {
  state = {
      prisoners: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prisoner_business/'.concat(user.bid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Business ".concat(user.bid);
        this.setState({
            prisoners: JSON.parse(response.data[key])
        }); 
        this.renderTableData();
    }, (error) => {
      console.log(error);
    });
  }
  ViewReport = () =>  {
    console.log("Hello");
  }
  renderTableData = () => {
      for(var i=0; i<this.state.prisoners.length; i++){
          var table = document.getElementById("prisoners");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = this.state.prisoners[i].pid;
          cell2.innerHTML = this.state.prisoners[i].first_name.concat(' ').concat(this.state.prisoners[i].last_name);
      }
  } 
  render() {
    return (
    <div>
      <BusinessNavBar/>
    <div className="List">
    <div className="ListHeader"> Employees List</div>
    <table id='prisoners' className='list-table'>
    <tr>
      <th> Prisoner ID </th>
      <th> Name</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default PrisonerBusList;