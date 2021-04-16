import React, { Component } from 'react';
import BusinessNavBar from './BusinessNavBar.js';
import BusinessReport from './BusinessReport.js';

class BusinessProfile extends Component {
  render() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <div>
          <BusinessNavBar />
          <BusinessReport id = {user.bid}/>
      </div>
    );
  }
}

export default BusinessProfile;