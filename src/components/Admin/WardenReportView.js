import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import WardenReport from '../Warden/WardenReport.js';

class AdminWardenReportView extends Component {
  render() {
    return (
      <div>
          <AdminNavBar />
          <WardenReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default AdminWardenReportView;