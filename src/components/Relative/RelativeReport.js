import React, { Component } from 'react';

class RelativeReport extends Component {
  state = {
    rid: null,
    first_name: null,
    last_name: null,
    pid: null,
    relation: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    this.setState({
      rid : user.rid,
      first_name: user.first_name,
      last_name: user.last_name, 
      name: user.first_name.concat(" ").concat(user.last_name),
      pid: user.pid, 
      relation: user.relation
    })
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