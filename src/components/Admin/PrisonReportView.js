import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import PrisonReport from '../Prison/PrisonReport.js';

class AdminPrisonReportView extends Component {
  render() {
    return (
      <div>
          <AdminNavBar />
          <PrisonReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default AdminPrisonReportView;