import React, { Component } from 'react';
import axios from 'axios';
import BusinessNavBar from './BusinessNavBar';

class UpdateRequirements extends Component {
  state = {
    bid:null,
    bname:null,
    number_required:null,
    currently_employed:null,
    new_requirement:null,
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/business_requirement/'.concat(user.bid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Business Requirments ".concat(user.bid);
        var res = JSON.parse(response.data[key]);
        this.setState({
          bid: res[0].bid,
          bname: res[0].bname,
          number_required: res[0].number_required,
          currently_employed: res[0].currently_employed
        });
    }, (error) => {
      console.log(error);
    });
  }
  HandleSubmit= (e) =>{
    e.preventDefault();
    var bid = document.getElementById("bid").value;
    var bname = document.getElementById("bname").value;
    var number_required = document.getElementById("number_required").value;
    var currently_employed = document.getElementById("currently_employed").value;
    var new_requirement = document.getElementById("new_requirement").value;
    console.log(new_requirement)
    console.log(currently_employed)
    if (parseInt(new_requirement)>parseInt(currently_employed)){
      this.setState({
        bid: bid,
        bname: bname,
        number_required: number_required,
        currently_employed: currently_employed,
        new_requirement: new_requirement,
      }, () => this.UR());
    } else{
      alert('New requirement is less than current employees!!')
    }
  }
  
  UR = () => {
    var url = '/update_business_requirement/'.concat(this.state.bid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'put',
      url: url,
      headers: {'Authorization': header},
      data: {
        bid: this.state.bid,
        bname: this.state.bname,
        number_required: this.state.number_required,
        currently_employed: this.state.currently_employed,
        new_requirement: this.state.new_requirement,
      }
    }).then((response) => {
      alert("Constraint successfully changed");
      window.location.href = '/update_requirements';
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <BusinessNavBar/>
      <div className="ReportGuard">
        <div className = "ReportHeader"> Update Requirments </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Business Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="bid"> Business ID </label>
            </td>
            <td>
              <input type="number" id="bid" value={this.state.bid} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bname"> Business Name: </label>
            </td>
            <td>
              <input type="text" id="bname" value={this.state.bname} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="currently_employed"> Currently Employed: </label>
            </td>
            <td>
              <input type="number" id="currently_employed" value={this.state.currently_employed} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="number_required"> Current Requirment </label>
            </td>
            <td>
              <input type="number" id="number_required" value={this.state.number_required} disabled/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="new_requirement"> New Requirment </label>
            </td>
            <td>
              <input type="number" id="new_requirement" />
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

export default UpdateRequirements;