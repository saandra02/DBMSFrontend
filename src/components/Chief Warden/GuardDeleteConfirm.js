import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import axios from 'axios';

class CWGuardDeleteConfirm extends Component {

  HandleYes = () => {
    var url = '/official/'.concat(this.props.match.params.id);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        alert("Successfully deleted");
        window.location.href = '/chief_warden/view_guards';
    }, (error) => {
      console.log(error);
      alert("Delete failed. Try again later");
      window.location.href = '/chief_warden/view_guards';
    });
  }
  HandleNo = () => {
    window.location.href = '/chief_warden/view_guards';
  }
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove Guard #{this.props.match.params.id}? </p></tr>
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

export default CWGuardDeleteConfirm;