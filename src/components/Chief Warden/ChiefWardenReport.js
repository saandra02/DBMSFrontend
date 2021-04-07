import React, { Component } from 'react';

class ChiefWardenReport extends Component {
  state = {
    empid:null
  }
  componentDidMount(){
    console.log("Hello CW");
  } 
  render() {
    return (
      <div>
      <div className="Report">
        <div className = "ReportHeader"> Chief Warden #{this.state.empid} </div>
        <br></br>
        <br/>
      </div>
      </div>
    );
  }
}

export default ChiefWardenReport;