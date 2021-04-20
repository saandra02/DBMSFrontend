import React, { Component } from 'react';
import WardenNavBar from './WardenNavBar.js';
import GuardList from '../Guard/GuardList.js';

class WardenGuardList extends Component {
  render() {
    return (
      <div>
          <WardenNavBar />
          <GuardList />
      </div>
    );
  }
}

export default WardenGuardList;