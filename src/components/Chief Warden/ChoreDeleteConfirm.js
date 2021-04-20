import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import axios from 'axios';

class CWChoreDeleteConfirm extends Component {

  HandleYes = () => {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var index = this.props.match.params.id;
    var chores = JSON.parse(sessionStorage.getItem("chores"));
    var url = '/chore_prison/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header},
      data: {
          chore_name: chores[index].chore_name
      }
    }).then((response) => {
        alert("Successfully deleted");
        window.location.href = '/chief_warden/view_chores';
    }, (error) => {
      console.log(error);
      alert("Delete failed. Try again later");
      window.location.href = '/chief_warden/view_chores';
      
    });
  }
  HandleNo = () => {
    window.location.href = '/chief_warden/view_chores';
  }
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove the chore? </p></tr>
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

export default CWChoreDeleteConfirm;