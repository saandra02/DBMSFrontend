import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddWardenForm extends Component {
  state = {
    empid: null, 
    password: null,
    first_name: null,
    last_name: null,
    y_o_e: null, 
    prison_no: null, 
    location: null, 
    mgr: null, 
    salary: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prison/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        var res = JSON.parse(response.data[key]);
        this.setState({
          mgr: user.empid,
          prison_no: user.prison_no,
          location: res[0].city.concat(", ").concat(res[0].district)
        });
    }, (error) => {
      console.log(error);
    });
  }
  HandleSubmit= (e) =>{
    e.preventDefault();
    var empid = document.getElementById("empid").value;
    var password = document.getElementById("password").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var y_o_e = document.getElementById("years_of_experience").value;
    var sal = document.getElementById("salary").value;
    this.setState({
      empid: empid,
      password: password,
      first_name: first_name,
      last_name: last_name,
      y_o_e: y_o_e,
      salary: sal
    }, () => this.AddWarden());
  }
  
  AddWarden = () => {
    var url = '/official/'.concat(this.state.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        salary: this.state.salary,
        years_of_experience: this.state.y_o_e,
        type: 'Warden',
        mgr: this.state.mgr,
        prison_no: this.state.prison_no
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_wardens';
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add New Warden </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="empid"> Employee ID: </label>
            </td>
            <td colSpan='2'>
              <input type="number" id="empid" />
            </td>
            <td>
              <label htmlFor="password"> Password </label>
            </td>
            <td colSpan='2'>
              <input type="password" id="password" />
            </td>
          </tr>
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
                <input id = "mgr" value={this.state.mgr} disabled/>
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
          <br/> <br/> <br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default AddWardenForm;