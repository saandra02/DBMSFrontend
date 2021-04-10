import React, { Component } from 'react';
import GuardNavBar from './GuardNavBar.js';
import GuardReport from './GuardReport.js';

class GuardProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <GuardNavBar />
          <GuardReport id = {user.empid} />
      </div>
    );
  }
}

export default GuardProfile;