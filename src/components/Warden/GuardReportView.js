import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import GuardReport from '../Guard/GuardReport.js';

class WardenGuardReportView extends Component {
  render() {
    return (
      <div>
          <WardenNavBar />
          <GuardReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default WardenGuardReportView;