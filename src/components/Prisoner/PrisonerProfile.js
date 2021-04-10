import React, { Component } from 'react';
import PrisonerNavBar from './PrisonerNavBar.js';
import PrisonerReport from './PrisonerReport.js';
class PrisonerProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <PrisonerNavBar />
          <PrisonerReport id = {user.pid} />
      </div>
    );
  }
}

export default PrisonerProfile;