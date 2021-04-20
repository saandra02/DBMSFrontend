import React, { Component } from 'react';
import axios from 'axios';

class RelativeReport extends Component {
  state = {
    rid: null,
    first_name: null,
    last_name: null,
    pid: null,
    relation: null,
    prison_no: null,
    appointment_date: null,
  }
  componentDidMount(){
    var id = this.props.id;
    var url = '/relative_sheet/'.concat(id)
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Relative ".concat(id);
      var res = JSON.parse(response.data[key]);
      var appointment_date = [];
      var length = res.length;
      for (var i=0;i<length;i++){
        appointment_date[i]=res[i].appointment_date;
      }
      this.setState({
        rid: res[0].rid,
        first_name: res[0].first_name,
        last_name: res[0].last_name,
        pid: res[0].pid,
        relation: res[0].relation,
        prison_no: res[0].prison_no,
        appointment_date: appointment_date,
      })
      console.log(this.state);
      this.renderAppointments();
      
    }, (error) => {
      console.log(error);
    });
  }
  renderAppointments = () => {
    var table = document.getElementById("appointment-section");
    var length = this.state.appointment_date.length;
    table.className = "FunctionTable";
    for(var i = 0; i < length; i++)
    {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = this.state.appointment_date[i];
    }
  }
  render() {
    return (
      <div>
      <div className="RelativeReport">
        <div className = "ReportHeader"> Relative #{this.state.rid} </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Relative Details</p>
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
              <label htmlFor="pid"> Related to:</label>
            </td>
            <td>
              <input type="text" id="pid" value={this.state.pid} disabled /> 
            </td>
            <td>
              <label htmlFor="relation"> Relation: </label>
            </td>
            <td>
              <input type="text" id="relation" value={this.state.relation} disabled />
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Upcoming and Past Vists </p>
          <table id = "appointment-section">
            <tbody>
            <td>
            </td>
            </tbody>
          </table>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default RelativeReport;