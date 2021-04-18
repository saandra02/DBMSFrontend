import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import AdminReport from './AdminReport.js';

class AdminProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <AdminNavBar />
          <AdminReport id = {user.empid} />
      </div>
    );
  }
}

export default AdminProfile;