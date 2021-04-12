import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import WardenReport from './WardenReport.js';

class WardenProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <WardenNavBar />
          <WardenReport id = {user.empid} />
      </div>
    );
  }
}

export default WardenProfile;