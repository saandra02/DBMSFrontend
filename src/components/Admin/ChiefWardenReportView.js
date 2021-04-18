import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import ChiefWardenReport from '../Chief Warden/ChiefWardenReport.js';

class AdminCWReportView extends Component {
  render() {
    return (
      <div>
          <AdminNavBar />
          <ChiefWardenReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default AdminCWReportView;