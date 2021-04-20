import React, { Component } from 'react';
import ChiefNavBar from './ChiefWardenNavBar.js';
import PrisonReport from '../Prison/PrisonReport.js';

class CWExpenseReportView extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <ChiefNavBar />
          <PrisonReport id = {user.prison_no} />
      </div>
    );
  }
}

export default CWExpenseReportView;