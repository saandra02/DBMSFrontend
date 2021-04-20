import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class AddChiefWardenForm extends Component {
  state = {
    empid: null, 
    password: null,
    first_name: null,
    last_name: null,
    y_o_e: null, 
    prison_no: null, 
    mgr: null, 
    salary: null
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prison/all/'.concat(user.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prisons";
        var res = JSON.parse(response.data[key]);
        var length = res.length;
        var prisons = [];
        console.log(res);
        for(var i = 0; i < length; i++)
        {
            prisons[i] = res[i].pno;
        }
        var select = document.getElementById("prison_no");
        for(i = 0; i < length; i++)
        {
            select.options.add(new Option(prisons[i]));
        }
        this.setState({
          mgr: user.empid
        });
    }, (error) => {
      console.log(error);
    });
  }
  HandleSubmit= (e) =>{
    e.preventDefault();
    var empid = document.getElementById("empid").value;
    var password = document.getElementById("password").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var y_o_e = document.getElementById("years_of_experience").value;
    var prison_no = document.getElementById("prison_no").value;
    var sal = document.getElementById("salary").value;
    this.setState({
      empid: empid,
      password: password,
      first_name: first_name,
      last_name: last_name,
      y_o_e: y_o_e,
      prison_no : prison_no,
      salary: sal,
    }, () => this.AddChiefWarden());
  }
  
  AddChiefWarden = () => {
    var url = '/official/'.concat(this.state.empid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        salary: this.state.salary,
        years_of_experience: this.state.y_o_e,
        type: 'Chief Warden',
        mgr: this.state.mgr,
        prison_no: this.state.prison_no
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/admin/view_chief_wardens';
    }, (error) => {
      console.log(error);
      alert("Unable to add!");
    });
  }

  render() {
    return (
      <div>
      <AdminNavBar/>
      <div className="AddCWForm">
        <div className = "ReportHeader"> Add New Chief Warden </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="empid"> Employee ID: </label>
            </td>
            <td colSpan='2'>
              <input type="number" id="empid" />
            </td>
            <td>
              <label htmlFor="password"> Password </label>
            </td>
            <td colSpan='2'>
              <input type="password" id="password" />
            </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td colSpan='2'>
          <input type="text" id="first_name"/>
          </td>
          <td>
            <label htmlFor="last_name"> Last Name: </label>
          </td>
          <td>
            <input type="text" id="last_name"/>
          </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="years_of_experience"> Years of Experience: </label>
          </td>
          <td colSpan='2'>
          <input type="number" id="years_of_experience"/>
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
              <label htmlFor="prison_no"> Prison Number: </label>
            </td>
            <td>
              <select id = "prison_no">
              </select>
            </td>
            </tr>
            <tr>
            <td>
              <label htmlFor="mgr"> Mgr ID: </label>
            </td>
              <td>
                <input id = "mgr" value={this.state.mgr} disabled/>
              </td>
            <td>
              <label htmlFor="salary"> Salary: </label>
            </td>
              <td>
                <input type = "text" id = "salary"/>
              </td>
            </tr>
            </tbody>
          </table>
          <br/> <br/> <br/>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default AddChiefWardenForm;