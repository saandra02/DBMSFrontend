import React, { Component } from 'react';
import axios from 'axios';
class PrisonReport extends Component {
  state = {
    pno:null, 
    location:null,
    capacity:null,
    prisoner_count:null,
    workforce:null,
    facility_name:null,
    maintenance_cost:null,
    employee_cost:null,
    total_cost:null
  }
  componentDidMount(){
    //var user = JSON.parse(sessionStorage.getItem('user'));
    var id = this.props.id;
    var url = '/prison/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Prison ".concat(id);
      var res = JSON.parse(response.data[key]);
      console.log(res)
      var length = res.length;
      var facility = [];
      for(var i = 0; i < length; i++)
      {
        facility[i] = res[i].facility_name;
      }
      this.setState({
        pno:res[0].pno,
        location:res[0].district.concat(", ").concat(res[0].city),
        capacity:res[0].capacity,
        prisoner_count:res[0].prisoner_count,
        workforce:res[0].workforce,
        facility_name:facility,
        maintenance_cost:res[0].maintenance_cost,
        employee_cost:res[0].employee_cost,
        total_cost: res[0].maintenance_cost + res[0].employee_cost
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
        <div className = "ReportHeader"> Prison # {this.state.pno}</div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Prison Details </p>
          <table className = "ReportTable">
          <tbody>
              <tr>
                  <td>
                      <label htmlFor="location"> Location: </label>
                  </td>
                  <td>
                      <input type = "text" id = "location" value = {this.state.location} disabled />
                  </td>
              </tr>
          <tr>
          <td>
          <label htmlFor="capacity"> Capacity: </label>
          </td>
          <td colSpan='2'>
          <input type="text" id="capacity" value={this.state.capacity} disabled />
          </td>
          <td>
            <label htmlFor="prisoner_count"> Number of Inmates: </label>
          </td>
          <td>
            <input type="text" id="prisoner_count" value={this.state.prisoner_count} disabled />
          </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="workforce"> Workforce: </label>
            </td>
            <td>
              <input type="text" id="workforce" value={this.state.workforce} disabled /> 
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="facility_name"> Facilities: </label>
            </td>
            <td colspan = '2'>
              <input type="text" id="facility_name" value={this.state.facility_name} disabled /> 
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="maintenance_cost"> Maintenance Cost: </label>
            </td>
            <td>
              <input type="text" id="maintenance_cost" value={this.state.maintenance_cost} disabled /> 
            </td>
            <td>
              <label htmlFor="employee_cost"> Employee Cost: </label>
            </td>
            <td>
              <input type="text" id="employee_cost" value={this.state.employee_cost} disabled /> 
            </td>
          </tr>
          <tr>
          <td>
              <label htmlFor="total_cost"> Total Cost: </label>
            </td>
            <td>
              <input type="text" id="total_cost" value={this.state.total_cost} disabled /> 
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <br/>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default PrisonReport;