import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';
import ChiefWardenReport from './ChiefWardenReport.js';

class ChiefWardenProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <ChiefWardenNavBar />
          <ChiefWardenReport id={user.empid}/> 
      </div>
    );
  }
}

export default ChiefWardenProfile;