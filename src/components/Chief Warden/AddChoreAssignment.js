import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddChoreAssignment extends Component {
  state = {
    prison_no: null,
    pid: null,
    chore_name: null
  }
  //Hello World
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    this.setState({
        prison_no: user.prison_no
    });
    var url = '/chore_prisoner/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        var res = JSON.parse(response.data[key]);
        var length = res.length;
        var chores = [];
        var prisoners = [];
        for(var i=0; i<length; i++){
          chores[i] = res[i].chore_name;
          prisoners[i] = res[i].pid;
        }
        var chores_unique = [...new Set(chores)];
        var prisoners_unique = [...new Set(prisoners)];

        var c_length = chores_unique.length;
        var p_length = prisoners_unique.length;

        var p_select = document.getElementById("prisoners")
        var c_select = document.getElementById("chores");

        for(var j=0; j<c_length; j++){
            c_select.options.add(new Option(chores_unique[j], chores_unique[j]));
        }

        for(var k=0; k<p_length; k++){
            p_select.options.add(new Option(prisoners_unique[k], prisoners_unique[k]));   
        }

    }, (error) => {
      console.log(error);
    });
  } 

  HandleSubmit = (e) =>{
    e.preventDefault();
    var chore_name = document.getElementById("chores").value;
    var pid = document.getElementById("prisoners").value;
    this.setState({
      chore_name: chore_name,
      pid: pid
    }, () => this.AddChoreAssignment()); 
  }

  AddChoreAssignment = () => {
    var url = '/chore';
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        chore_name: this.state.chore_name,
        pid: this.state.pid,
        prison_no: this.state.prison_no
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_chore_assignments';
    }, (error) => {
      console.log(error);
      alert("Chore requirement maxed, cannot assign!")
    });
  }

  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add Chore Assignment </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Chore Assignment Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="prisoners"> Prisoner ID: </label>
            </td>
            <td colSpan='2'>
              <select type="number" id="prisoners">
              </select>
            </td>
            <td>
              <label htmlFor="chores"> Chore Name: </label>
            </td>
            <td colSpan='2'>
              <select type="text" id="chores">
              </select>
            </td>
          </tr>
          </tbody>
          </table>
        </form>
        <br/> <br/> <br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
      </div>
      </div>
    );
  }
}

export default AddChoreAssignment;