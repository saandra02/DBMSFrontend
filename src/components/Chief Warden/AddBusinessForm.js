import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar';
import axios from 'axios';

class CWAddBusinessForm extends Component {
  state = {
    bid: null,
    password: null,
    bname: null,
    role: null,
    role_desc: null,
    sal: null,
    number_required: null,
  }
  
  HandleSubmit = (e) =>{
    e.preventDefault();
    var bid = document.getElementById("bid").value;
    var password = document.getElementById("password").value;
    var bname = document.getElementById("bname").value;
    var role = document.getElementById("role").value;
    var role_desc = document.getElementById("role_desc").value;
    var sal = document.getElementById("sal").value;
    var number_required = document.getElementById("number_required").value;

    this.setState({
      bid: bid,
      password: password,
      bname: bname,
      role: role, 
      role_desc:role_desc,
      sal: sal,
      number_required: number_required
    }, () => this.AddBusiness()); 
  }

  AddBusiness = () => {
    var url = '/business/'.concat(this.state.bid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        password: this.state.password,
        bname: this.state.bname,
        role: this.state.role,
        role_desc: this.state.role_desc,
        sal: this.state.sal,
        number_required: this.state.number_required
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_businesses';
    }, (error) => {
      console.log(error);
    });
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
          <label htmlFor="password"> Password: </label>
          </td>
          <td>
          <input type="password" id="password"/>
          </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="bname"> Business Name: </label>
          </td>
          <td>
          <input type="text" id="bname"/>
          </td>
            <td>
              <label htmlFor="role"> Role: </label>
            </td>
            <td>
              <input type="text" id="role" />
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
              <label htmlFor="sal"> Salary: </label>
            </td>
            <td>
              <input type="number" id="sal"/>
            </td>
            <td>
              <label htmlFor="number_required"> Number of Employees Required: </label>
            </td>
            <td>
              <input type="number" id="number_required"/>
            </td>
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