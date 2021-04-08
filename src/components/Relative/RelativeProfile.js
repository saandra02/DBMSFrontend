import React, { Component } from 'react';
import RelativeNavBar from './RelativeNavBar.js';
import RelativeReport from './RelativeReport.js';

class RelativeProfile extends Component {
  render() {
    return (
      <div>
          <RelativeNavBar />
          <RelativeReport />
      </div>
    );
  }
}

export default RelativeProfile;