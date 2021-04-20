import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class PrisonShift extends Component {
  state = {
    pid:null,
    prison_no:null
  }
    componentDidMount(){
      var user = JSON.parse(sessionStorage.getItem("user"));
      var url = '/prisonerprison/'.concat(user.empid);
      var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
      axios({
        method: 'get',
        url: url,
        headers: {'Authorization': header}
      }).then((response) => {
          var key = "Prisoners";
          var key1 = "Prisons";
          var res = JSON.parse(response.data[key]);
          var res1 = JSON.parse(response.data[key1]);
          var length = res.length;
          var length1 = res1.length;
          var prisoners = [];
          var prisonprisoners = [];
          var prisons = [];
          for(var i = 0; i < length; i++)
          {
            prisoners[i] = res[i].pid;
            prisonprisoners[i] = res[i].prison_no;
          }
          for(i = 0; i < length1; i++)
          {
            prisons[i] = res1[i].pno;
          }
          var select1 = document.getElementById("pid");
          var select2 = document.getElementById("prison_no");
          var prison = [];
          prison = [...new Set(prisons)];
          var len = prison.length;
          for(i = 0; i < length; i++)
          {
            select1.options.add(new Option(prisoners[i]));
          }
          for(i = 0; i < len; i++)
          {
            select2.options.add(new Option(prison[i]));
          }
          this.setState({
            pid:prisoners,
            prison_no:prisonprisoners
          })
          this.renderTableData();
      }, (error) => {
        console.log(error);
      });
    }
    renderTableData = () => {
        for(var i=0; i<this.state.pid.length; i++){
            var table = document.getElementById("guards");
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = this.state.pid[i];
            cell2.innerHTML = this.state.prison_no[i];
        }
    } 

  HandleSubmit= (e) =>{
    e.preventDefault();
    var pid = document.getElementById("pid").value;
    var prison_no = document.getElementById("prison_no").value;
    console.log('hi');
    console.log(prison_no);
      this.setState({
        pid: pid,
        prison_no: prison_no,
      }, () => this.UR()); 
  }
  
  UR = () => {
    var url = '/prisoner/'.concat(this.state.pid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'put',
      url: url,
      headers: {'Authorization': header},
      data: {
        pid:this.state.pid,
        prison_no: this.state.prison_no
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/admin/prison_shift';
    }, (error) => {
      console.log(error);
      alert("Prison capacity exceeded!");
    });
  }

  render() {
    return (
      <div>
      <AdminNavBar/>
      <div className="PrisonShift">
        <div className = "ReportHeader"> Shift Prisons </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Prisoner and Prison Details</p>
          <table className = "ReportTable" id = "guards">
          <tbody>
            <tr>
              <th><u> Prisoner ID </u></th>
              <th><u> Prison Number </u></th>
            </tr>
            </tbody>
            </table>
            <br></br>
          <table className = "PrisonShiftTable">
            <tbody>
          <tr>
            <td>
            <label htmlFor="pid"> Shift Prisoner ID: </label>
            </td>
            <td>
              <select id = "pid"></select>
            </td>
            <td>
              <label htmlFor="prison_no"> Shift to Prison Number: </label>
            </td>
            <td>
              <select id = "prison_no"></select>
            </td>
          </tr>
          </tbody>
          </table>
          <br/> <br/> <br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
export default PrisonShift;