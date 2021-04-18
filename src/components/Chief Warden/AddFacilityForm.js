import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddFacilityForm extends Component {
  state = {
    prison_no: null,
    facility_name:null,
    cost_per_unit_monthly:null,
    count:null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    this.setState({
        prison_no: user.prison_no
    });
  } 

  HandleSubmit = (e) =>{
    e.preventDefault();
    var facility_name = document.getElementById("facility_name").value;
    var cost_per_unit_monthly = document.getElementById("cost_per_unit_monthly").value;
    var count = document.getElementById("count").value;
    this.setState({
        facility_name: facility_name,
        cost_per_unit_monthly: cost_per_unit_monthly,
        count: count
    }, () => this.AddFacility());
  }

  AddFacility = () => {
    var url = '/facility/'.concat(this.state.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        facility_name: this.state.facility_name,
        cost_per_unit_monthly: this.state.cost_per_unit_monthly,
        count: this.state.count
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_facilities';
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add New Facility </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Facility Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="prison_no"> Prison No.: </label>
            </td>
            <td colSpan='2'>
              <input type="number" id="prison_no" value={this.state.prison_no} disabled/>
            </td>
            <td>
              <label htmlFor="facility_name"> Facility Name: </label>
            </td>
            <td colSpan='2'>
              <input type="text" id="facility_name" />
            </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="cost_per_unit_monthly"> Monthly Cost Per Unit: </label>
          </td>
          <td colSpan='2'>
          <input type="number" id="cost_per_unit_monthly"/>
          </td>
          <td>
            <label htmlFor="count"> No. of Units: </label>
          </td>
          <td>
            <input type="number" id="count"/>
          </td>
          </tr>
          </tbody>
          </table>
        </form>
        <br/> <br/> <br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
      </div>
      </div>
    );
  }
}

export default AddFacilityForm;