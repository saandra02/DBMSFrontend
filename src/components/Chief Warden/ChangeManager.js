import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AssignManager extends Component {
state = {
    mgr: null,
    cempid: null,
    empid: null
}

componentDidMount(){
    var user_id = this.props.match.params.id;
    var url = '/guard_warden_comb/'.concat(user_id); //change
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
        method: 'get',
        url: url,
        headers: {'Authorization': header}
    }).then((response) => {
    var key = "Combination ".concat(user_id);
    var res = JSON.parse(response.data[key]);
    var len = res.length;
    var cempids = [];
    for (var a=0;a<len;a++){
        cempids[a]=res[a].cempid;
    }
    this.setState({
        mgr : res[0].mgr,
        empid: user_id
    });
    if (res[0].mgr == null){
        this.setState({
            cempid: 0
        });
    }
    var select = document.getElementById("newMGR");
    for(var i = 0; i < cempids.length; i++) {
        var opt = cempids[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    }, (error) => {
        console.log(error);
    });
}

HandleSubmit= (e) =>{
    e.preventDefault();
    var empid = this.props.match.params.id;
    var mgr = document.getElementById("mgr").value;
    var cempid = document.getElementById("newMGR").value;
    this.setState({
    mgr: mgr,
    cempid: cempid,
    empid: empid
    }, () => this.UR());
}

UR = () => {
    var url = '/update_mgr_id';   //change
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
    method: 'put',
    url: url,
    headers: {'Authorization': header},
    data: {
        cempid: this.state.cempid,
        empid: this.state.empid,
    }
    }).then((response) => {
        alert("Update successful");
        window.location.href = '/chief_warden/view_guards'; //change this
    }, (error) => {
    console.log(error);
    });
}

render() {
    return (
    <div>
    <ChiefWardenNavBar/>
    <div className="ReportGuard">
    <div className = "ReportHeader"> Assign New Manager </div>
    <br></br>
    <form>
        <table className = "ReportTable">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="mgr"> Managed By </label>
                    </td>
                    <td>
                        <input type="number" id="mgr" value={this.state.mgr} disabled />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="newMGR"> New Manager ID </label>
                    </td>
                    <td>
                        <select id="newMGR">
                        <option>Choose a new ID</option>
                        </select>
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

export default AssignManager;