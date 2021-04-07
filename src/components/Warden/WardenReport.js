import React, { Component } from 'react';

class WardenReport extends Component {
  state = {
    empid:null
  }
  componentDidMount(){
    console.log("Hello Warden")
  } 
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Warden #{this.state.empid} </div>
        <br></br>
        <br/>
      </div>
      </div>
    );
  }
}

export default WardenReport;