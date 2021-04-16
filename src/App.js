import React, { Component } from 'react';
import Header from './components/Header.js';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import PrisonerProfile from './components/Prisoner/PrisonerProfile.js';
import RelativeProfile from './components/Relative/RelativeProfile.js';
import BusinessProfile from './components/Business/BusinessProfile.js';
import GuardProfile from './components/Guard/GuardProfile.js';
import WardenProfile from './components/Warden/WardenProfile.js';
import ChiefWardenProfile from './components/Chief Warden/ChiefWardenProfile.js';
import PrisonerList from './components/Prisoner/PrisonerList.js';
import PrisonerBusList from './components/Business/PrisonerBusList.js';
import GuardPrisonerReportView from './components/Guard/PrisonerReportView.js';
import WardenPrisonerReportView from './components/Warden/WPrisonerReportView.js';
import WardenGuardReportView from './components/Warden/GuardReportView.js';
import GuardList from './components/Guard/GuardList.js';
import UpdateRequirements from './components/Business/UpdateRequirements.js';

import CWPrisonerListView from './components/Chief Warden/PrisonersListView.js';
import CWPrisonerReportView from './components/Chief Warden/PrisonerReportView.js';
import CWAddPrisonerForm from './components/Chief Warden/AddPrisonerForm.js';

import CWWardenListView from './components/Chief Warden/WardenListView.js';
import CWAddWardenForm from './components/Chief Warden/AddWardenForm.js';
import CWWardenReportView from './components/Chief Warden/WardenReportView';

import CWGuardListView from './components/Chief Warden/GuardListView.js';
import CWAddGuardForm from './components/Chief Warden/AddGuardForm.js';
import CWGuardReportView from './components/Chief Warden/GuardReportView.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path='/' component ={Home}/>
      <Route exact path='/login/:role' component={LoginForm}/>
      <Route exact path='/prisoner' component={PrisonerProfile}/>
      <Route exact path='/guard' component={GuardProfile} />
      <Route exact path='/warden' component={WardenProfile}/>
      <Route exact path='/chiefwarden' component={ChiefWardenProfile}/>
      <Route exact path='/relative' component={RelativeProfile} />
      <Route exact path = '/business' component={BusinessProfile} />
      <Route exact path = '/view_prisoners' component={PrisonerList} />
      <Route exact path = '/view_employees' component={PrisonerBusList} />
      <Route exact path= '/guard/view_prisoner/:id' component = {GuardPrisonerReportView} />
      <Route exact path= '/warden/view_prisoner/:id' component = {WardenPrisonerReportView} />
      <Route exact path= '/warden/view_guard/:id' component = {WardenGuardReportView} />
      <Route exact path = '/view_guards' component= {GuardList} />
      <Route exact path = '/update_requirements' component= {UpdateRequirements} />


      <Route exact path = '/chief_warden/view_prisoners' component={CWPrisonerListView} />
      <Route exact path = '/chief_warden/view_prisoner/:id' component={CWPrisonerReportView} />
      <Route exact path = '/chief_warden/add_prisoner' component={CWAddPrisonerForm} />
      
      <Route exact path = '/chief_warden/view_guards' component= {CWGuardListView} />
      <Route exact path = '/chief_warden/view_guard/:id' component= {CWGuardReportView} />
      <Route exact path = '/chief_warden/add_guard' component = {CWAddGuardForm} />
      
      <Route exact path = '/chief_warden/view_wardens' component= {CWWardenListView} />
      <Route exact path= '/chief_warden/view_warden/:id' component = {CWWardenReportView} />
      <Route exact path = '/chief_warden/add_warden' component = {CWAddWardenForm} />
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;