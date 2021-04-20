import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar';
import axios from 'axios';

class AssignShiftForm extends Component {
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
      var guardshift = [1, 2, 3, 4, 5, 6];
      var guard = [];
      var select = document.getElementById('shift_number');
      var select1 = document.getElementById('empid');
      for(var i = 0; i < length; i++)
      {
        guard[i] = res[i].empid;
        console.log(i)
      }
      var guard_unique = [...new Set(guard)];
      console.log(guard_unique);
      var len = guard_unique.length;
      var guards = [];
      console.log(guards);
      for(i = 0; i < len; i++)
      {
        select1.options.add(new Option(guard_unique[i]));
      }
      for(i = 0; i < 6; i++)
      {
        select.options.add(new Option(guardshift[i]));
      }
      this.setState({
        guard: guard_unique,
        guardshifts: guardshift
    }); 
    }, (error) => {
      console.log(error);
    });
  }
  HandleSubmit= (e) =>{
    e.preventDefault();
    var empid = document.getElementById("empid").value;
    var shift_number = document.getElementById("shift_number").value;
    this.setState({
      empid: empid,
      shift_number : shift_number
    }, () => this.AddShift());
  }
  
  AddShift = () => {
    var url = '/shift/'.concat(this.state.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        empid: this.state.empid,
        shift_number: this.state.shift_number
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/shift';
    }, (error) => {
      console.log(error);
      alert("Selected shift already assigned!");
    });
  }
  render() {
    return (
      <div>
      <WardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add A Shift Assignment </div>
        <br></br>
        <form>
          <table className = "ReportTable">
            <br/><br/>
          <tbody>
          <tr>
          <td>
          <label htmlFor="empid"> Guard's Employee ID: </label>
          </td>
          <td colSpan='2'>
          <select id = "empid"></select>
          </td>
          <td>
            <label htmlFor="shift_number"> Shift Number: </label>
          </td>
          <td>
            <select id = "shift_number"></select>
          </td>
          </tr>
            </tbody>
          </table>
          <br/><br/><br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default AssignShiftForm;