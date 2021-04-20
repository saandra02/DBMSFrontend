import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import axios from 'axios';
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";

class ShiftView extends Component {
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
            for(var i=0; i < this.state.guardshifts.length; i++){
                var row = table.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = this.state.guardshifts[i].empid;
                cell2.innerHTML = this.state.guardshifts[i].shift_number;
                console.log(this.state.guardshifts[i].empid);
                cell3.innerHTML = '<button class = "view-button" onClick=(function(){window.location.href="/shift/confirm_delete/' + this.state.guardshifts[i].empid + '/' + this.state.guardshifts[i].shift_number+'"})()> Delete </button>';
            }
        }

        AddHandleClick = () => {
          window.location.href = "/shift/add_shift";
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
         </div>
          <p className = "ReportSubheading"> Guard and Shift Details</p>
          <table><tbody><tr><td>Guard ID</td><td>Shift Number</td></tr></tbody></table>
          <table id = "guardshifts-section" classname = "ReportTable">
              <tbody>
                  <tr></tr>
              </tbody>
          </table>
          <br/> <br/>
        <br/>
      </div>
      </div>
    );
    }
  }
export default ShiftView;
