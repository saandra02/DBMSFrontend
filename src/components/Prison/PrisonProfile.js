import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import PrisonReport from './PrisonReport.js';

class PrisonProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <AdminNavBar />
          <PrisonReport id = {user.empid} />
      </div>
    );
  }
}

export default PrisonProfile;