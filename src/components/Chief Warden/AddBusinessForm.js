import React, { Component } from 'react';
import axios from 'axios';

class CWAddBusinessForm extends Component {
  state = {
    bid: null,
    bname: null,
    role: null,
    role_desc: null,
    sal: null,
    number_required: null,
    number_employed: null
  }
  componentDidMount(){
    var id = this.props.id;
    var url = '/business_sheet/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Business ".concat(id);
      var res = JSON.parse(response.data[key]);
      console.log(res)
      this.setState({
        bid:res[0].bid,
        bname:res[0].bname,
        role:res[0].role,
        role_desc:res[0].role_desc,
        sal:res[0].sal,
        number_required:res[0].number_required,
        number_employed:res[0].number_employed
      });
      console.log(this.state);
    }, (error) => {
      console.log(error);
    });
  }

  GenerateReport = () => {
    var url = '/business/'.concat(sessionStorage.getItem("id"));
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
      <div className="BusinessReport">
        <div className = "ReportHeader"> Business # {this.state.bid}</div>
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
          <label htmlFor="bname"> Business Name: </label>
          </td>
          <td>
          <input type="text" id="bname" value={this.state.bname} disabled />
          </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role"> Role: </label>
            </td>
            <td>
              <input type="text" id="role" value={this.state.role} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role_desc"> Role Description: </label>
            </td>
            <td>
              <input type="text" id="role_desc" value={this.state.role_desc} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="sal"> Salary: </label>
            </td>
            <td>
              <input type="text" id="sal" value={this.state.sal} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="number_required"> Number of Employees Required: </label>
            </td>
            <td>
              <input type="text" id="number_required" value={this.state.number_required} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="number_employed"> Number of Employees Employed: </label>
            </td>
            <td>
              <input type="text" id="number_employed" value={this.state.number_employed} disabled />
            </td>
          </tr>
          </tbody>
          </table>
        </form>
      </div>
      </div>
    );
  }
}

export default CWAddBusinessForm;