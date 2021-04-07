import React, { Component } from 'react';
import Header from './components/Header.js';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import PrisonerReport from './components/Prisoner/PrisonerReport.js';
import RelativeReport from './components/Relative/RelativeReport.js';
import BusinessReport from './components/Business/BusinessReport.js';
import GuardReport from './components/Guard/GuardReport.js';
import WardenReport from './components/Warden/WardenReport.js';
import ChiefWardenReport from './components/Chief Warden/ChiefWardenReport.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path='/' component ={Home}/>
      <Route path='/login/:role' component={LoginForm}/>
      <Route path='/prisoner' component={PrisonerReport}/>
      <Route path='/guard' component={GuardReport} />
      <Route path='/warden' component={WardenReport}/>
      <Route path='/chiefwarden' component={ChiefWardenReport}/>
      <Route path='/relative' component={RelativeReport} />
      <Route path = '/business' component={BusinessReport} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;