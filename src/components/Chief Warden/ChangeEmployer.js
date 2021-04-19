import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AssignBusiness extends Component {
state = {
    employ_id:null,
    bus_id: null,
    pid: null
}

componentDidMount(){
var user_id = this.props.match.params.id;
var url = '/emp_bid_comb/'.concat(user_id);
var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
axios({
method: 'get',
url: url,
headers: {'Authorization': header}
}).then((response) => {
var key = "Combination ".concat(user_id);
var res = JSON.parse(response.data[key]);
var len = res.length;
var bus_ids = [];
for (var a=0;a<len;a++){
bus_ids[a]=res[a].bid;
}
this.setState({
    employ_id : res[0].employed_by,
    bus_id : bus_ids,
    pid: user_id
});
if (res[0].employed_by == null){
    this.setState({
        employ_id: 0
    });
}
var select = document.getElementById("newBID");
for(var i = 0; i < bus_ids.length; i++) {
var opt = bus_ids[i];
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
var user_id = this.props.match.params.id;
var employ_id = document.getElementById("employ_id").value;
var bid = document.getElementById("newBID").value;
this.setState({
employ_id: employ_id,
bid: bid,
user_id: user_id
}, () => this.UR());
}

UR = () => {
var url = '/update_bus_id';
var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
axios({
method: 'put',
url: url,
headers: {'Authorization': header},
data: {
employ_id: this.state.employ_id,
bid: this.state.bid,
pid: this.state.user_id,
}
}).then((response) => {
alert("Constraint successfully changed");
window.location.href = '/chief_warden/view_prisoners'; //change this
}, (error) => {
console.log(error);
});
}

render() {
return (
<div>
<ChiefWardenNavBar/>
<div className="ReportGuard">
<div className = "ReportHeader"> Assign Business </div>
<br></br>
<form>
<table className = "ReportTable">
<tbody>
<tr>
<td>
<label htmlFor="employ_id"> Employed By </label>
</td>
<td>
<input type="number" id="employ_id" value={this.state.employ_id} disabled />
</td>
</tr>
<tr>
<td>
<label htmlFor="bname"> New Business ID </label>
</td>
<td>
<select id="newBID">
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

export default AssignBusiness;