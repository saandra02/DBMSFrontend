import React, { Component } from 'react';
import axios from 'axios';
class GuardReport extends Component {
  state = {
    empid:null,
    prison_no:null,
    first_name:null,
    last_name:null,
    salary:null,
    years_of_experience:null,
    mgr:null,
    mgr_name:null,
    shift_number:null,
    district:null,
    city:null
  }
  componentDidMount(){
    //console.log("Hello");
    var id = this.props.id;
    var url = '/guard_report/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Guard ".concat(id);
      var res = JSON.parse(response.data[key]);
      var length = res.length;
      var shifts = [];
      var mgr_name = res[0].mgr_first_name.concat(' ').concat(res[0].mgr_last_name);
      console.log(res)
      for(var i = 0; i < length; i++)
      {
        console.log(i);
        shifts[i] = res[i].shift_number;
      }
      console.log(shifts);
      this.setState({
        empid:res[0].empid,
        prison_no:res[0].prison_no,
        first_name:res[0].first_name,
        last_name:res[0].last_name,
        salary:res[0].salary,
        years_of_experience:res[0].years_of_experience,
        mgr:res[0].mgr,
        mgr_name: mgr_name,
        shift_number:shifts,
        district:res[0].district,
        city:res[0].city
      });
      console.log(this.state);
    }, (error) => {
      console.log(error);
    });
  } 
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Guard #{this.state.empid} </div>
        <br></br>
        <form>
          <p> Personal Details</p>
          <table>
          <tbody>
          <tr>
          <td colSpan='2'>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td colSpan='2'>
          <input type="text" id="first_name" value={this.state.first_name} disabled />
          </td>
          <td colSpan='2'>
            <label htmlFor="last_name"> Last Name: </label>
          </td>
          <td colSpan='2'>
            <input type="text" id="last_name" value={this.state.last_name} disabled />
          </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <label htmlFor="years_of_experience"> Years of Experience: </label>
            </td>
            <td colSpan='2'>
              <input type="text" id="years_of_experience" value={this.state.years_of_experience} disabled /> 
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p> Work Details</p>
          <table>
          <tbody>
            <tr>
            <td>
              <input type = "text" id = "prison_no" value={this.state.prison_no} disabled />
            </td>
            <td>
            <input type = "text" id = "district" value={this.state.district} disabled />
            </td>
            <td>
            <input type = "text" id = "city" value={this.state.city} disabled />
            </td>
            </tr>
            <tr>
              <td>
                <input type = "text" id = "mgr" value={this.state.mgr} disabled />
              </td>
              <td>
                <input type = "text" id = "mgr_name" value={this.state.mgr_name} disabled />
              </td>
            </tr>
            <tr>
              <td>
                <input type = "text" id = "salary" value={this.state.salary} disabled />
              </td>
            </tr>
            </tbody>
          </table>
          <br/>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type = "text" id = "shift_number" value={this.state.shift_number} disabled />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default GuardReport;