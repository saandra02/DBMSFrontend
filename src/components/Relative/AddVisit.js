import React, { Component } from 'react';
import axios from 'axios';
import RelativeNavBar from './RelativeNavBar';

class AddVisits extends Component {
    state = {
      vid: null,
      rid: null,
      appointment_date: null
    }
    HandleSubmit= (e) =>{
      e.preventDefault();
      var vid = document.getElementById("vid").value;
      var rid = document.getElementById("rid").value;
      var appointment_date = document.getElementById("appointment_date").value;
      this.setState({
        vid: vid,
        rid: rid,
        appointment_date: appointment_date,
      }, () => this.UR());
    }
    
    UR = () => {
      var url = '/visit';
      var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
      axios({
        method: 'post',
        url: url,
        headers: {'Authorization': header},
        data: {
            vid: this.state.vid,
            rid: this.state.rid,
            appointment_date: this.state.appointment_date,
        }
      }).then((response) => {
        alert("Successfully added!");
        window.location.href = '/add_visit';
      }, (error) => {
        alert("Visits must have at least 2 weeks between them");
        window.location.href = '/add_visit';
        console.log(error);
      });
    }
  
    render() {
      return (
        <div>
        <RelativeNavBar/>
        <div className="ReportGuard">
          <div className = "ReportHeader"> Schedule A Visit </div>
          <br></br>
          <form>
            <table className = "ReportTable">
            <tbody>
            <tr>
              <td>
                <label htmlFor="vid"> Vistor ID </label>
              </td>
              <td>
                <input type="number" id="vid" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="rid"> Relative ID </label>
              </td>
              <td>
                <input type="number" id="rid" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="appointment_date"> Appointment Date </label>
              </td>
              <td>
                <input type="date" id="appointment_date" />
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
export default AddVisits;