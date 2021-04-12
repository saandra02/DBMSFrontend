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
import GuardPrisonerReportView from './components/Guard/PrisonerReportView.js';
import WardenPrisonerReportView from './components/Warden/WPrisonerReportView.js';
import WardenGuardReportView from './components/Warden/GuardReportView.js';
import GuardList from './components/Guard/GuardList.js';

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
      <Route exact path= '/guard/view_prisoner/:id' component = {GuardPrisonerReportView} />
      <Route exact path= '/warden/view_prisoner/:id' component = {WardenPrisonerReportView} />
      <Route exact path= '/warden/view_guard/:id' component = {WardenGuardReportView} />
      <Route exact path = '/view_guards' component= {GuardList} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;