import React, { Component } from 'react';
import axios from 'axios';
import BusinessNavBar from './BusinessNavBar';

class BusinessReport extends Component {
  state = {
    bid: null
  }
  componentDidMount(){
    console.log("In business report")
    this.GenerateReport();
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
      <BusinessNavBar />
      <div className="Report">
        <div className = "ReportHeader"> Business # </div>
        <br></br>
        <br/>
      </div>
      </div>
    );
  }
}

export default BusinessReport;