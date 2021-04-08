import React, { Component } from 'react';
import BusinessNavBar from './BusinessNavBar.js';
import BusinessReport from './BusinessReport.js';

class BusinessProfile extends Component {
  render() {
    return (
      <div>
          <BusinessNavBar />
          <BusinessReport />
      </div>
    );
  }
}

export default BusinessProfile;