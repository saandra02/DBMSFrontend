import React, { Component } from 'react';

class GuardReport extends Component {
  state = {
    empid:null
  }
  componentDidMount(){
    console.log("Hello")
  } 
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Guard #{this.state.empid} </div>
        <br></br>
        <br/>
      </div>
      </div>
    );
  }
}

export default GuardReport;