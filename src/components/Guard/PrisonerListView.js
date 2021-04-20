import React, { Component } from 'react';
import GuardNavBar from './GuardNavBar.js';
import PrisonerList from '../Prisoner/PrisonerList.js';

class GuardPrisonerListView extends Component {
  render() {
    return (
      <div>
          <GuardNavBar />
          <PrisonerList/>
      </div>
    );
  }
}

export default GuardPrisonerListView;