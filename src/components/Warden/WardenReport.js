import React, { Component } from 'react';
import axios from 'axios';

class WardenReport extends Component {
  state = {
    empid:null,
    prison_no:null,
    first_name:null,
    last_name:null,
    salary:null,
    years_of_experience:null,
    mgr:null,
    mgr_name:null,
    location:null,
    employees:null
  }
  componentDidMount(){
    //console.log("Hello Warden")
    var id = this.props.id;
    var url = '/warden_report/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Warden ".concat(id);
      var res = JSON.parse(response.data[key]);
      var mgr_name = res[0].mgr_first_name.concat(' ').concat(res[0].mgr_last_name);
      console.log(res)
      this.setState({
        empid:res[0].empid,
        prison_no:res[0].prison_no,
        first_name:res[0].first_name,
        last_name:res[0].last_name,
        salary:res[0].salary,
        years_of_experience:res[0].years_of_experience,
        mgr:res[0].mgr,
        mgr_name: mgr_name,
        location: res[0].district.concat(', ').concat(res[0].city),
        employees: res[0].employees
      });
      console.log(this.state);
    }, (error) => {
      console.log(error);
    });
  } 

  render() {
    return (
      <div>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Warden #{this.state.empid} </div>
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
              <label htmlFor="years_of_experience"> Years of Experience: </label>
            </td>
            <td>
              <input type="text" id="years_of_experience" value={this.state.years_of_experience} disabled /> 
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
                <input type = "text" id = "mgr" value={this.state.mgr} disabled />
              </td>
              <td>
              <label htmlFor="mgr_name"> Mgr Name: </label>
            </td>
              <td>
                <input type = "text" id = "mgr_name" value={this.state.mgr_name} disabled />
              </td>
            </tr>
            <tr>
            <td>
              <label htmlFor="salary"> Salary: </label>
            </td>
              <td>
                <input type = "text" id = "salary" value={this.state.salary} disabled />
              </td>
              <td>
              <label htmlFor="employees"> Employees: </label>
            </td>
              <td>
                <input type = "text" id = "employees" value={this.state.employees} disabled />
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
export default WardenReport;