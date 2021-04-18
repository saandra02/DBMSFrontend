import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import {IconContext} from "react-icons";

class ShiftView extends Component {
  state = {
      guard:null,
      guardshifts:null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/shift/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "GuardShift ".concat(user.empid);
        var res = JSON.parse(response.data[key]);
        console.log(res);
        var length = res.length;
        var guardshift = [];
        var guard = [];
        for(var i = 0; i < length; i++)
        {
          var guardshiftsobject = {};
          guard[i] = res[i].empid;
          guardshiftsobject['empid'] = res[i].empid;
          guardshiftsobject['shift_number'] = res[i].shift_number;
          guardshift[i] = guardshiftsobject;
          console.log(i)
        }
        var guardshift_unique = [...new Set(guardshift)];
        var guard_unique = [...new Set(guard)];
        console.log(guard_unique);
        console.log(guardshift_unique);
        var len = guard_unique.length;
        for(i = 0; i < len; i++)
        {
          var guardshiftarr = [];
          var k = 0;
          for(var j = 0; j < length; j++)
          {
            if (res[j].empid === guard_unique[i])
            guardshiftarr[k++] = " ".concat(res[j].shift_number);
          }
          console.log(guardshiftarr);
          this.setState({
            guard: guard_unique[i],
            guardshifts: guardshiftarr
        }); 
        this.renderGuardShifts();
        }
        
    }, (error) => {
      console.log(error);
    });
  }

  renderGuardShifts = () => {
    var table = document.getElementById("guardshifts-section");
    //var length = this.state.guardshifts.length;
    table.className = "FunctionTable";
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = this.state.guard;
    cell2.innerHTML = this.state.guardshifts;;
  }
  AddHandleClick = () => {
    window.location.href = '/shift/add_shift';
  }
  DeleteHandleClick = () => {
    window.location.href = '/shift/delete_shift';
  }
  render() {
    return (
      <div>
<WardenNavBar/>
    <div className="List">
    <div className="ListHeader"> Shift Assignments
        <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='add-icon' onClick={this.AddHandleClick}> 
         <FaPlus /> 
         </span>
         </IconContext.Provider>
         &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp;
         <IconContext.Provider value={{ style: {fontSize: '25px', color: "#FEFEFE", align:'right'}}}>
        <span className='delete-icon' onClick={this.DeleteHandleClick}> 
         <FaTrash /> 
         </span>
         </IconContext.Provider>
    </div>
    <table>
    <tr>
      <th align = 'center'> Employee </th>
      <th align = 'center'> Shifts Assigned </th>
     </tr>
    </table>
    <table id="guardshifts-section" className='list-table'>
    </table>
    </div>
    </div>
    );
  }
}
export default ShiftView;