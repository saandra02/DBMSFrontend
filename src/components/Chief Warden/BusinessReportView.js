import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import BusinessReport from '../Business/BusinessReport.js';

class CWBusinessReportView extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <BusinessReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default CWBusinessReportView;