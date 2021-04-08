import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import ChiefWardenReport from './ChiefWardenReport.js';

class ChiefWardenProfile extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <ChiefWardenReport />
      </div>
    );
  }
}

export default ChiefWardenProfile;