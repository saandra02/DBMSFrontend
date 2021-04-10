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


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path='/' component ={Home}/>
      <Route path='/login/:role' component={LoginForm}/>
      <Route path='/prisoner' component={PrisonerProfile}/>
      <Route path='/guard' component={GuardProfile} />
      <Route path='/warden' component={WardenProfile}/>
      <Route path='/chiefwarden' component={ChiefWardenProfile}/>
      <Route path='/relative' component={RelativeProfile} />
      <Route path = '/business' component={BusinessProfile} />
      <Route path = '/view_prisoners' component={PrisonerList} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;