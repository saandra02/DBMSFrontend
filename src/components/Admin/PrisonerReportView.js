import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import PrisonerReport from '../Prisoner/PrisonerReport.js';

class AdminPrisonerReportView extends Component {
  render() {
    return (
      <div>
          <AdminNavBar />
          <PrisonerReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default AdminPrisonerReportView;