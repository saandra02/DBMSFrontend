import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class AddPrisonForm extends Component {
  state = {
    pno:null,
    capacity:null,
    district:null,
    city:null
  }
  componentDidMount(){
      
  }
  HandleSubmit= (e) =>{
    e.preventDefault();
    var pno = document.getElementById("pno").value;
    var capacity = document.getElementById("capacity").value;
    var district = document.getElementById("district").value;
    var city = document.getElementById("city").value;
    this.setState({
      pno:pno,
      capacity:capacity,
      district:district,
      city:city
    }, () => this.AddPrison());
  }
  
  AddPrison = () => {
    var url = '/prison/'.concat(this.state.pno);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        pno: this.state.pno,
        capacity: this.state.capacity,
        district: this.state.district,
        city: this.state.city
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/admin/view_prisons';
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <AdminNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Add New Prison </div>
        <br></br>
        <form>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="empid"> Prison Number: </label>
            </td>
            <td colSpan='2'>
              <input type="text" id="pno" />
            </td>
            <td>
              <label htmlFor="capacity"> Capacity: </label>
            </td>
            <td colSpan='2'>
              <input type="text" id="capacity" />
            </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="district"> District: </label>
          </td>
          <td colSpan='2'>
          <input type="text" id="district"/>
          </td>
          <td>
            <label htmlFor="city"> City: </label>
          </td>
          <td>
            <input type="text" id="city"/>
          </td>
          </tr>
          </tbody>
          </table>
          <br></br>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default AddPrisonForm;