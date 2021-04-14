import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import PrisonerReport from '../Prisoner/PrisonerReport.js';

class CWPrisonerReportView extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <PrisonerReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default CWPrisonerReportView;