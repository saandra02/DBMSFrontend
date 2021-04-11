import React, { Component } from 'react';
import RelativeNavBar from './RelativeNavBar.js';
import RelativeReport from './RelativeReport.js';

class RelativeProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <RelativeNavBar />
          <RelativeReport id={user.rid}/>
      </div>
    );
  }
}

export default RelativeProfile;