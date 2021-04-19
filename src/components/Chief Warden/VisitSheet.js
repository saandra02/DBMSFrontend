import React, { Component } from 'react';
import axios from 'axios';
import CheifWardenNavBar from './ChiefWardenNavBar';


class VisitorPrison extends Component {
    state = {
        visitors: null
    }
componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/visit_sheet/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
        method: 'get',
        url: url,
        headers: {'Authorization': header}
    }).then((response) => {
        var key = "Visit ".concat(user.prison_no);
        this.setState({
            visitors: JSON.parse(response.data[key])
        });
        this.renderTableData();
    }, (error) => {
        console.log(error);
    });
}

ViewReport = () => {
    console.log("Hello");
}

renderTableData = () => {
    for(var i=0; i<this.state.visitors.length; i++){
        var table = document.getElementById("visitors");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = this.state.visitors[i].vid;
        cell2.innerHTML = this.state.visitors[i].rid;
        cell3.innerHTML = this.state.visitors[i].pid;
        cell4.innerHTML = this.state.visitors[i].appointment_date;
    }
}
render() {
    return (
        //navbar
        <div>
        <CheifWardenNavBar/>
        <div className="List">
        <div className="ListHeader"> Visit History</div>
        <table id='visitors' className='list-table'>
        <tr>
        <th> Visit ID </th>
        <th> Relative ID</th>
        <th> Prisoner ID</th>
        <th> Appointment Date</th>
        </tr>
        </table>
        </div>
        </div>
        );
    }
}

export default VisitorPrison;