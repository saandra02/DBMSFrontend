import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class AdminGuardListView extends Component {
  state = {
      guards: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/official/guards/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Guards";
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
          cell1.innerHTML = this.state.guards[i].empid;
          cell2.innerHTML = this.state.guards[i].first_name.concat(" ").concat(this.state.guards[i].last_name);
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/view_guard/' + this.state.guards[i].empid +'"})()> Report </button>' ;
      }
  }
  render() {
    return (
    <div>
      <AdminNavBar/>
    <div className="List">
    <div className="ListHeader"> 
        Guard List 
    </div>
    <table id="guards" className='list-table'>
    <tr>
      <th> Guard ID </th>
      <th> Guard Name</th>
      <th> View Report</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default AdminGuardListView;