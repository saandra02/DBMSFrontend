import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import axios from 'axios';

class CWFacilityDeleteConfirm extends Component {

  HandleYes = () => {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var index = this.props.match.params.id;
    var facility = JSON.parse(sessionStorage.getItem("facility"));
    var url = '/facility/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header},
      data: {
          facility_name: facility[index].facility_name
      }
    }).then((response) => {
        alert("Successfully deleted");
        window.location.href = '/chief_warden/view_chore_assignments';
    }, (error) => {
      console.log(error);
      alert("Delete failed. Try again later");
      
    });
  }
  HandleNo = () => {
    window.location.href = '/chief_warden/view_facility';
  }
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove the facility? </p></tr>
            </table>
            <div className="delete-form-button">
            <button className="DeleteButton" onClick={this.HandleYes}> Yes </button>
            <button className="DeleteButton" onClick={this.HandleNo}> No </button>
            </div>

        </div>
      </div>
    );
  }
}

export default CWFacilityDeleteConfirm;