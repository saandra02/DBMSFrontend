import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";

class AdminPrisonView extends Component {
  state = {
      guards: null, 
      guards1:null,
      totalexp:null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prison/all/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prisons";
        var key1 = "Total";
        this.setState({
            guards: JSON.parse(response.data[key]),
            guards1: JSON.parse(response.data[key1])
        }); 
        var totalexp = this.state.guards1[0].tot_emp_cost + this.state.guards1[0].tot_mnt_cost;
        this.setState({
          totalexp:totalexp
        })
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
          cell1.innerHTML = this.state.guards[i].pno;
          cell2.innerHTML = this.state.guards[i].district.concat(", ").concat(this.state.guards[i].city);
          cell3.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/view_prison/' + this.state.guards[i].pno +'"})()> Report </button>' ;
          cell4.innerHTML = '<button class="view-button" onClick=(function(){window.location.href="/admin/delete_prison/'+this.state.guards[i].pno+'"})()> Delete </button>' ;
      }
  } 
  HandleClick = () => {
    window.location.href = '/admin/add_prison';
  }
  render() {
    return (
    <div> 
    <AdminNavBar/> 
    <div className="List">
    <div className="ListHeader"> 
      Prison List and Total Expenditure
      <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.HandleClick}> 
         <FaPlus /> 
         </span>
      </IconContext.Provider>
    </div>
    <table id="guards" className='list-table'>
    <tr>
      <th> Prison No. </th>
      <th> Location </th>
      <th> View</th>
      <th> Delete</th>
     </tr>
     <tr>
          <td>
            <label htmlFor="totalexp">
            Total Cost of Operation: 
            </label>
          </td>
          <td>
              <input type = "text" id = "totalexp" value = {this.state.totalexp} disabled />
                  </td>
        </tr>
    </table>
    </div>
    </div>
    );
  }
}

export default AdminPrisonView;