import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar';
//import axios from 'axios';

class CWAddPrisonerForm extends Component {
  state = {
    pid:null,
    password: null,
    first_name:null, 
    last_name:null,
    age: null,
    entry_date: null,
    ht_in_m: null,
    wt_in_kg: null,
    eye_colour: null,
    hair_colour: null,
    prison_no: null,
    identifying_mark:null,
    affiliation:null,
    crime:null,
  }
  componentDidMount(){
  } 
  render() {
    return (
      <div>
      <ChiefWardenNavBar />
      <div className="ReportPrisoner Add">
        <div className = "ReportHeader"> Add New Prisoner </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
          <td>
          <label htmlFor="pid"> Prisoner ID: </label>
          </td>
          <td>
          <input type="number" id="pid"/>
          </td>
          <td>
            <label htmlFor="password"> Password: </label>
          </td>
          <td>
            <input type="text" id="password"/>
          </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td>
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
              <label htmlFor="ht_in_m"> Height (in m): </label>
            </td>
            <td>
              <input type="text" id="ht_in_m"/> 
            </td>
            <td>
              <label htmlFor="wt_in_kg"> Weight (in kg): </label>
            </td>
            <td>
            <input type="text" id="wt_in_kg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="eye_colour"> Eye Colour: </label>
            </td>
            <td>
              <input type="text" id="eye_colour"/>
            </td>
            <td>
              <label htmlFor="hair_colour"> Hair Colour: </label>
            </td>
            <td>
              <input type="text" id="hair_colour"/> 
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="age"> Age: </label>
            </td>
            <td>
              <input type="number" id="age"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="identifying_mark"> Identifying Marks: </label>
            </td>
            <td colSpan = '2'>
              <input type="text" id="identifying_mark"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="affiliation"> Affiliation: </label>
            </td>
            <td colSpan = '2'>
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Prison Time Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="prison_no"> Prison Number: </label>
            </td>
            <td>
              <input type="text" id="prison_no" value={this.state.prison_no} disabled />
              </td>
              <td>
                <label htmlFor="entry_date"> Entry Date: </label>
              </td>
              <td>
              <input type="date" id="entry_date"/>
              </td>
            </tr>
            </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Crime History</p>
          <table className = "ReportTable">
          <tbody>
            <tr>
              <td>
              <input type="text" id="crime" value={this.state.crime} disabled /> 
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

export default CWAddPrisonerForm;