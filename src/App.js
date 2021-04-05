import React, { Component } from 'react';
import Header from './components/Header.js';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js';
import LoginForm from './components/LoginForm.js';
import PrisonerReport from './components/PrisonerReport.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path='/' component ={Home}/>
      <Route path='/login/:role' component={LoginForm}/>
      <Route path='/prisoner/:id' component={PrisonerReport}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;