import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddChoreForm extends Component {
  state = {
    prison_no: null,
    chore_name:null,
    people_needed:null,
    chore_time:null
  }
  //Hello World
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    this.setState({
        prison_no: user.prison_no
    });
  } 

  HandleSubmit = (e) =>{
    e.preventDefault();
    var chore_name = document.getElementById("chore_name").value;
    var people_needed = document.getElementById("people_required").value;
    var chore_time = document.getElementById("chore_time").value;
    this.setState({
      chore_name: chore_name,
      people_needed: people_needed,
      chore_time: chore_time
    }, () => this.AddChore());
  }

  AddChore = () => {
    var url = '/chore_prison/'.concat(this.state.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        chore_name: this.state.chore_name,
        people_needed: this.state.people_needed,
        chore_time: this.state.chore_time
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_chores';
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <ChiefWardenNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add New Chore </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Chore Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="prison_no"> Prison No.: </label>
            </td>
            <td colSpan='2'>
              <input type="number" id="prison_no" value={this.state.prison_no} disabled/>
            </td>
            <td>
              <label htmlFor="chore_name"> Chore Name: </label>
            </td>
            <td colSpan='2'>
              <input type="text" id="chore_name" />
            </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="people_required"> People Required: </label>
          </td>
          <td colSpan='2'>
          <input type="number" id="people_required"/>
          </td>
          <td>
            <label htmlFor="chore_time"> Time: </label>
          </td>
          <td>
            <input type="time" id="chore_time"/>
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

export default AddChoreForm;