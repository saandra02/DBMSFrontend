import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import axios from 'axios';

class ConfirmShiftDelete extends Component {

  HandleYes = () => {
    var url = '/shift/'.concat(this.props.match.params.id).concat('/').concat(this.props.match.params.shiftnumber);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        alert("Successfully deleted");
        window.location.href = '/shift';
    }, (error) => {
      console.log(error);
      alert("Delete failed. Try again later");
      window.location.href = '/shift';
    });
  }
  HandleNo = () => {
    window.location.href = '/shift';
  }
  render() {
    return (
      <div>
          <WardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove this shift? </p></tr>
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

export default ConfirmShiftDelete;