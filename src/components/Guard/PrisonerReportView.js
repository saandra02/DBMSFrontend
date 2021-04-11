import React, { Component } from 'react';
import GuardNavBar from './GuardNavBar.js';
import PrisonerReport from '../Prisoner/PrisonerReport.js';

class GuardPrisonerReportView extends Component {
  render() {
    return (
      <div>
          <GuardNavBar />
          <PrisonerReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default GuardPrisonerReportView;