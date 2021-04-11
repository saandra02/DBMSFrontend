import React, { Component } from 'react';
import axios from 'axios';

class RelativeReport extends Component {
  state = {
    rid: null,
    first_name: null,
    last_name: null,
    pid: null,
    relation: null,
    prison_number: null,
    appointment_date: null
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
        prison_number: res[0].prison_no,
        appointment_date: appointment_date
      })
      console.log(this.state);
      
    }, (error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Relative #{this.state.rid} </div>
        <br></br>
        <form>
          <table>
          <tbody>
          <tr>
          <td>
          <label htmlFor="first_name"> Name: </label>
          </td>
          <td>
          <input type="text" id="first_name" value={this.state.name} disabled />
          </td>
          <td>
          </td>
          <td>
          </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="pid"> Related to: Prisoner # </label>
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
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default RelativeReport;