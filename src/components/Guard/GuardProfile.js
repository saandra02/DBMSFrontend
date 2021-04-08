import React, { Component } from 'react';
import GuardNavBar from './GuardNavBar.js';
import GuardReport from './GuardReport.js';

class GuardProfile extends Component {
  render() {
    return (
      <div>
          <GuardNavBar />
          <GuardReport />
      </div>
    );
  }
}

export default GuardProfile;