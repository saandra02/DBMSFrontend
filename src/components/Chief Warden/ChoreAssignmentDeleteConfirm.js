import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import axios from 'axios';

class CWChoreAssignmentDeleteConfirm extends Component {

  HandleYes = () => {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var index = this.props.match.params.id;
    var chores = JSON.parse(sessionStorage.getItem("chores"));
    var url = '/chore';
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header},
      data: {
          pid: chores[index].pid,
          chore_name: chores[index].chore_name,
          prison_no: user.prison_no
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
    window.location.href = '/chief_warden/view_chore_assignments';
  }
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove the chore assignment? </p></tr>
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

export default CWChoreAssignmentDeleteConfirm;