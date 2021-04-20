import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class AdminPrisonerListView extends Component {
  state = {
      pid: null,
      name:null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prisoners/all/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prisoners";
        var res = JSON.parse(response.data[key]);
        var length = res.length;
        var names = [];
        var nameunique = [];
        var prisoners = [];
        var prisonerunique = [];
        for(var i = 0; i < length; i++)
        {
            prisoners[i] = res[i].pid;
            names[i] = res[i].first_name.concat(" ").concat(res[i].last_name);
        }
        prisonerunique = [...new Set(prisoners)];
        nameunique = [...new Set(names)];
        this.setState({
            pid: prisonerunique,
            name: nameunique
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
      for(var i=0; i<this.state.pid.length; i++){
          var table = document.getElementById("guards");
          var row = table.insertRow(i+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          cell1.innerHTML = this.state.pid[i];
          cell2.innerHTML = this.state.name[i];
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/view_prisoner/' + this.state.pid[i] +'"})()> Report </button>' ;
      }
  } 
  render() {
    return (
    <div> 
    <AdminNavBar/> 
    <div className="AdminPrisonerList">
    <div className="ListHeader"> 
      Prisoner List
    </div>
    <table id="guards" className='list-table'>
    <tr>
      <th> Prisoner ID </th>
      <th> Name</th>
      <th> View</th>
     </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default AdminPrisonerListView;