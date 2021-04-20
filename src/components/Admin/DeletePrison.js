import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import axios from 'axios';

class DeletePrison extends Component {

  HandleYes = () => {
    var url = '/prison/'.concat(this.props.match.params.id);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'delete',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        alert("Successfully deleted");
        window.location.href = '/admin/view_prisons';
    }, (error) => {
      console.log(error);
      alert("Delete failed. Try again later");
      window.location.href = '/admin/view_prisons';
    });
  }
  HandleNo = () => {
    window.location.href = '/admin/view_prisons';
  }
  render() {
    return (
      <div>
          <AdminNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> <p className='DeleteMessage'>Are you sure you want to remove Prison #{this.props.match.params.id}? </p></tr>
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

export default DeletePrison;