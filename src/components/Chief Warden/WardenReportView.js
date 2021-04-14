import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import WardenReport from '../Warden/WardenReport.js';

class CWWardenReportView extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <WardenReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default CWWardenReportView;