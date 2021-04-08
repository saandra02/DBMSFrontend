import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import WardenReport from './WardenReport.js';

class WardenProfile extends Component {
  render() {
    return (
      <div>
          <WardenNavBar />
          <WardenReport />
      </div>
    );
  }
}

export default WardenProfile;