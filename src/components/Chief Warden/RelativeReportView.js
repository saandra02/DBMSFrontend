import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import RelativeReport from '../Relative/RelativeReport.js';

class CWRelativeReportView extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <RelativeReport id = {this.props.match.params.id} />
      </div>
    );
  }
}

export default CWRelativeReportView;