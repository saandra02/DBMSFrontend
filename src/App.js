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
import AdminProfile from './components/Admin/AdminProfile.js';
import PrisonerList from './components/Prisoner/PrisonerList.js';
import PrisonerBusList from './components/Business/PrisonerBusList.js';
import GuardPrisonerReportView from './components/Guard/PrisonerReportView.js';
import WardenPrisonerReportView from './components/Warden/WPrisonerReportView.js';
import WardenGuardReportView from './components/Warden/GuardReportView.js';
import GuardList from './components/Guard/GuardList.js';
import UpdateRequirements from './components/Business/UpdateRequirements.js';
import AddVisits from './components/Relative/AddVisit.js';

import CWPrisonerListView from './components/Chief Warden/PrisonersListView.js';
import CWPrisonerReportView from './components/Chief Warden/PrisonerReportView.js';
import CWAddPrisonerForm from './components/Chief Warden/AddPrisonerForm.js';

import CWWardenListView from './components/Chief Warden/WardenListView.js';
import CWAddWardenForm from './components/Chief Warden/AddWardenForm.js';
import CWWardenReportView from './components/Chief Warden/WardenReportView';

import CWGuardListView from './components/Chief Warden/GuardListView.js';
import CWAddGuardForm from './components/Chief Warden/AddGuardForm.js';
import CWGuardReportView from './components/Chief Warden/GuardReportView.js';

import CWChoreList from './components/Chief Warden/ChoreListView.js';
import CWFacilityList from './components/Chief Warden/FacilityListView.js';
import CWBusinessList from './components/Chief Warden/BusinessListView.js';
import AddChoreForm from './components/Chief Warden/AddChoreForm.js';
import AddFacilityForm from './components/Chief Warden/AddFacilityForm.js';
import CWRelativeList from './components/Chief Warden/RelativeListView.js';
import CWWardenDeleteConfirm from './components/Chief Warden/WardenDeleteConfirm.js';

import ShiftView from './components/Warden/ShiftView.js';
import DeleteShiftForm from './components/Warden/DeleteShiftForm.js';
import AssignShiftForm from './components/Warden/AssignShiftForm.js';

import AdminCWListView from './components/Admin/ChiefWardenListView.js';
import AdminCWReportView from './components/Admin/ChiefWardenReportView.js';
import AddChiefWardenForm from './components/Admin/AddChiefWardenForm.js';
import AdminPrisonerListView from './components/Admin/PrisonerListView.js';
import AdminPrisonerReportView from './components/Admin/PrisonerReportView.js';
import AdminPrisonView from './components/Admin/ViewPrisonList.js';
import AdminWardenListView from './components/Admin/WardenListView.js';
import AdminWardenReportView from './components/Admin/WardenReportView.js';
import AdminGuardListView from './components/Admin/GuardListView.js';
import AdminGuardReportView from './components/Admin/GuardReportView.js';

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
      <Route exact path='/admin' component={AdminProfile} />
      <Route exact path='/relative' component={RelativeProfile} />
      <Route exact path = '/business' component={BusinessProfile} />
      <Route exact path = '/view_prisoners' component={PrisonerList} />
      <Route exact path = '/view_employees' component={PrisonerBusList} />
      <Route exact path= '/guard/view_prisoner/:id' component = {GuardPrisonerReportView} />
      <Route exact path= '/warden/view_prisoner/:id' component = {WardenPrisonerReportView} />
      <Route exact path= '/warden/view_guard/:id' component = {WardenGuardReportView} />
      <Route exact path = '/view_guards' component= {GuardList} />
      <Route exact path = '/update_requirements' component= {UpdateRequirements} />
      <Route exact path = '/add_visit' component={AddVisits} />


      <Route exact path = '/chief_warden/view_prisoners' component={CWPrisonerListView} />
      <Route exact path = '/chief_warden/view_prisoner/:id' component={CWPrisonerReportView} />
      <Route exact path = '/chief_warden/add_prisoner' component={CWAddPrisonerForm} />
      
      <Route exact path = '/chief_warden/view_guards' component= {CWGuardListView} />
      <Route exact path = '/chief_warden/view_guard/:id' component= {CWGuardReportView} />
      <Route exact path = '/chief_warden/add_guard' component = {CWAddGuardForm} />
      
      <Route exact path = '/chief_warden/view_wardens' component= {CWWardenListView} />
      <Route exact path= '/chief_warden/view_warden/:id' component = {CWWardenReportView} />
      <Route exact path= '/chief_warden/delete_warden/:id' component = {CWWardenDeleteConfirm} />
      <Route exact path = '/chief_warden/add_warden' component = {CWAddWardenForm} />

      <Route exact path = '/chief_warden/view_chores' component = {CWChoreList} />
      <Route exact path = '/chief_warden/view_facilities' component={CWFacilityList} />
      <Route exact path = '/chief_warden/view_businesses' component={CWBusinessList} />
      <Route exact path = '/chief_warden/view_relatives' component={CWRelativeList} />

      <Route exact path='/chief_warden/add_chore' component={AddChoreForm} />
      <Route exact path='/chief_warden/add_facility' component={AddFacilityForm} />

      <Route exact path = '/shift/' component = {ShiftView} />
      <Route exact path = '/shift/add_shift' component = {AssignShiftForm} />
      <Route exact path = '/shift/delete_shift' component = {DeleteShiftForm} />

      <Route exact path = '/admin/view_chief_wardens' component = {AdminCWListView} />
      <Route exact path = '/admin/view_chief_warden/:id' component = {AdminCWReportView} />
      <Route exact path = '/admin/add_chief_warden' component = {AddChiefWardenForm} />
      <Route exact path = '/admin/view_prisoners' component = {AdminPrisonerListView} />
      <Route exact path = '/admin/view_prisoner/:id' component = {AdminPrisonerReportView} />
      <Route exact path = '/admin/view_prisons' component = {AdminPrisonView} />
      <Route exact path = '/admin/view_wardens' component = {AdminWardenListView} />
      <Route exact path = '/admin/view_warden/:id' component = {AdminWardenReportView} />
      <Route exact path = '/admin/view_guards' component = {AdminGuardListView} />
      <Route exact path = '/admin/view_guard/:id' component = {AdminGuardReportView} />
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;