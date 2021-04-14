import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import GuardReport from '../Guard/GuardReport.js';

class CWGuardReportView extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <GuardReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default CWGuardReportView;