import React, { Component } from 'react';
//import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddGuardForm extends Component {
  state = {
    empid:null,
    first_name:null,
    last_name:null,
    salary:null,
    years_of_experience:null,
    mgr:null,
  }
  componentDidMount(){
      console.log("Hello");
  } 
  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add New Guard </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td colSpan='2'>
          <input type="text" id="first_name"/>
          </td>
          <td>
            <label htmlFor="last_name"> Last Name: </label>
          </td>
          <td>
            <input type="text" id="last_name"/>
          </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="years_of_experience"> Years of Experience: </label>
          </td>
          <td colSpan='2'>
          <input type="number" id="years_of_experience"/>
          </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Work Details</p>
          <table className = "ReportTable">
          <tbody>
            <tr>
            <td>
              <label htmlFor="prison_no"> Prison Number: </label>
            </td>
            <td>
              <input type = "text" id = "prison_no" value={this.state.prison_no} disabled />
            </td>
            <td>
              <label htmlFor="location"> Location: </label>
            </td>
            <td>
            <input type = "text" id = "location" value={this.state.location} disabled />
            </td>
            </tr>
            <tr>
            <td>
              <label htmlFor="mgr"> Mgr ID: </label>
            </td>
              <td>
                <select id = "mgr">
                </select>
              </td>
            <td>
              <label htmlFor="salary"> Salary: </label>
            </td>
              <td>
                <input type = "text" id = "salary"/>
              </td>
            </tr>
            </tbody>
          </table>
          <br/>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default AddGuardForm;