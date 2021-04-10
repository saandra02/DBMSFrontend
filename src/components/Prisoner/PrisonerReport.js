import React, { Component } from 'react';
import axios from 'axios';
class PrisonerReport extends Component {
  state = {
    pid:null,
    first_name:null, 
    last_name:null,
    age: null,
    entry_date: null,
    ht_in_m: null,
    wt_in_kg: null,
    eye_colour: null,
    hair_colour: null,
    prison: null,
    employer:null
  }
  componentDidMount(){
    var url = '/prisoner_report/'.concat(sessionStorage.getItem("id"));
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  } 
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Prisoner #{this.state.pid} </div>
        <br></br>
        <form>
          <p> Personal Details</p>
          <table>
          <tbody>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td>
          <input type="text" id="first_name" value={this.state.first_name} disabled />
          </td>
          <td>
            <label htmlFor="last_name"> Last Name: </label>
          </td>
          <td>
            <input type="text" id="last_name" value={this.state.last_name} disabled />
          </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="ht_in_m"> Height (in m): </label>
            </td>
            <td>
              <input type="text" id="ht_in_m" value={this.state.ht_in_m} disabled /> 
            </td>
            <td>
              <label htmlFor="wt_in_kg"> Weight (in kg): </label>
            </td>
            <td>
            <input type="text" id="wt_in_kg" value={this.state.wt_in_kg} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="eye_colour"> Eye Colour: </label>
            </td>
            <td>
              <input type="text" id="eye_colour" value={this.state.eye_colour} disabled />
            </td>
            <td>
              <label htmlFor="hair_colour"> Hair Colour: </label>
            </td>
            <td>
              <input type="text" id="hair_colour" value={this.state.hair_colour} disabled /> 
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p> Work Details</p>
          <table>
          <tbody>
            </tbody>
          </table>
          <br/>
          <p> Crime History</p>
          <table>
          <tbody>
          </tbody>
          </table>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default PrisonerReport;