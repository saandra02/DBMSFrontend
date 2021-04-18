import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar';
import axios from 'axios';

class DeleteShiftForm extends Component {
  state = {
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
              var guardshifts = JSON.parse(response.data[key]);
                this.setState({
                  guardshifts: guardshifts
              });
              this.renderTableData();
        },
         (error) => {
            console.log(error);
          });
        }
        renderTableData = () => {
            var table = document.getElementById("guardshifts-section");
            for(var i=0; i<this.state.guardshifts.length; i++){
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = this.state.guardshifts[i].empid;
                cell2.innerHTML = this.state.guardshifts[i].shift_number;
                cell3.innerHTML = '<button class = "view button" onClick = {this.HandleDelete}> HI </button>';
                //cell3.onClick = () => this.HandleDelete();
            }
        }
        
        HandleDelete = (e) => {
          e.preventDefault();
          this.setState({
          empid: this.state.empid,
          shift_number : this.state.shift_number
    }, () => this.DeleteShift());
        }
        DeleteShift = () => {
            var url = '/shift/'.concat(this.state.empid);
            var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
            axios({
              method: 'DELETE',
              url: url,
              headers: {'Authorization': header},
              data: {
                empid: this.state.empid,
                shift_number: this.state.shift_number
              }
            }).then((response) => {
              alert("Successfully deleted!");
              window.location.href = '/shift';
            }, (error) => {
              console.log(error);
            });
            
        }
  render() {
    return (
      <div>
      <WardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Delete A Shift Assignment </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Guard and Shift Details</p>
          <table><tbody><tr><td>Guard ID</td><td>Shift Number</td></tr></tbody></table>
          <table id = "guardshifts-section">
              <tbody>
                  <tr></tr>
              </tbody>
          </table>
          <br/> <br/>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}
export default DeleteShiftForm;