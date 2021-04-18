import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar';
//import axios from 'axios';

class CWAddBusinessForm extends Component {
  state = {
    bid: null,
    bname: null,
    role: null,
    role_desc: null,
    sal: null,
    number_required: null,
  }
  componentDidMount(){
  }

  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="BusinessReport">
        <div className = "ReportHeader"> Add A New Business</div>
        <br></br>
        <form>
        <p className = "ReportSubheading"> Business Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
          <td>
          <label htmlFor="bid"> Business ID: </label>
          </td>
          <td>
          <input type="number" id="bid"/>
          </td>
          <td>
          <label htmlFor="bname"> Business Name: </label>
          </td>
          <td>
          <input type="text" id="bname"/>
          </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role"> Role: </label>
            </td>
            <td>
              <input type="text" id="role" />
            </td>
            <td>
              <label htmlFor="sal"> Salary: </label>
            </td>
            <td>
              <input type="number" id="sal"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role_desc"> Role Description: </label>
            </td>
            <td>
              <input type="text" id="role_desc" value={this.state.role_desc}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="number_required"> Number of Employees Required: </label>
            </td>
            <td>
              <input type="number" id="number_required"/>
            </td>
          </tr>
          <tr>
          </tr>
          </tbody>
          </table>
        </form>
        <br/> <br/> 
        <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
      </div>
      </div>
    );
  }
}

export default CWAddBusinessForm;