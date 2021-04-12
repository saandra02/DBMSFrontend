import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import PrisonerReport from '../Prisoner/PrisonerReport.js';

class WardenPrisonerReportView extends Component {
  render() {
    return (
      <div>
          <WardenNavBar />
          <PrisonerReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default WardenPrisonerReportView;