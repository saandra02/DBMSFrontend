import React, { Component } from 'react';
import PrisonerNavBar from './PrisonerNavBar.js'
class PrisonerReport extends Component {
  state = {
    pid:null,
    first_name:"John", 
    last_name:"Doe",
    ht_in_m: 1.63,
    wt_in_kg: 65.57,
    eye_colour: "black",
    hair_colour: "black",
    show: false
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.setState({
      pid : id
    })
  } 
  render() {
    return (
      <div>
      <PrisonerNavBar />
      <div className="Report">
        <div className = "ReportHeader"> Prisoner #{this.state.pid} </div>
        <br></br>
        <form>
          <table>
          <tbody>
          <th> Personal Details</th>
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
          <table>
          <tbody>
            <th> Work Details</th>
            </tbody>
          </table>
          <br/>
          <table>
          <tbody>
            <th> Crime History</th>
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