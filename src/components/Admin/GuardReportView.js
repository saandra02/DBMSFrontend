import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import GuardReport from '../Guard/GuardReport.js';

class AdminGuardReportView extends Component {
  render() {
    return (
      <div>
          <AdminNavBar />
          <GuardReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default AdminGuardReportView;