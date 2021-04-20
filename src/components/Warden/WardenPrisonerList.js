import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import PrisonerReport from '../Prisoner/PrisonerList.js';

class WardenPrisonerList extends Component {
  render() {
    return (
      <div>
          <WardenNavBar />
          <PrisonerReport />
      </div>
    );
  }
}

export default WardenPrisonerList;