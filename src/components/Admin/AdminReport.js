import React, { Component } from 'react';
import axios from 'axios';
class AdminReport extends Component {
  state = {
    empid:null,
    first_name:null,
    last_name:null,
    salary:null,
    years_of_experience:null,
    employees:null
  }

  componentDidMount(){
    var id = this.props.id;
    var url = '/admin_report/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Admin ".concat(id);
      var res = JSON.parse(response.data[key]);
      console.log(res)
      this.setState({
        empid:res[0].empid,
        first_name:res[0].first_name,
        last_name:res[0].last_name,
        salary:res[0].salary,
        years_of_experience:res[0].years_of_experience,
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
        <div className = "ReportHeader"> Admin</div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
              <tr>
                  <td>
                      <label htmlFor="empid"> ID: </label>
                  </td>
                  <td>
                      <input type = "text" id = "empid" value = {this.state.empid} disabled />
                  </td>
              </tr>
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

export default AdminReport;