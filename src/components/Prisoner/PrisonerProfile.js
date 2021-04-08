import React, { Component } from 'react';
import PrisonerNavBar from './PrisonerNavBar.js';
import PrisonerReport from './PrisonerReport.js';
class PrisonerProfile extends Component {
  render() {
    return (
      <div>
          <PrisonerNavBar />
          <PrisonerReport />
      </div>
    );
  }
}

export default PrisonerProfile;