import React, { Component } from 'react';
import axios from 'axios';

class PrisonerList extends Component {
  state = {
      prisoners: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prisoner_prison/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
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
          var cell3 = row.insertCell(2);
          cell1.innerHTML = this.state.prisoners[i].pid;
          cell2.innerHTML = this.state.prisoners[i].first_name.concat(" ").concat(this.state.prisoners[i].last_name);
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/guard/view_prisoner/' + this.state.prisoners[i].pid +'"})()> Report </button>' ;
      }
  } 
  render() {
    return (
    <div className="List">
    <div className="ListHeader"> Prisoners List</div>
    <table id='prisoners' className='list-table'>
    <tr>
      <th> Prisoner ID </th>
      <th> Prisoner Name</th>
      <th> View Report</th>
     </tr>
    </table>
    </div>
    );
  }
}

export default PrisonerList;