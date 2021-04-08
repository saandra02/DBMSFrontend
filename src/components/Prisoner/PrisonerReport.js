import React, { Component } from 'react';
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
    var user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.setState({
      pid : user.pid,
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      entry_date: user.entry_date,
      ht_in_m: user.ht_in_m,
      wt_in_kg: user.wt_in_kg,
      hair_colour: user.hair_colour,
      eye_colour: user.eye_colour,
      prison: user.prison_no,
      employer: user.employed_by

    })
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