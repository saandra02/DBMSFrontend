import React, { Component } from 'react';
import axios from 'axios';
import ChiefWardenNavBar from './ChiefWardenNavBar';

class AddRelativeForm extends Component {
    state = {
        rid: null,
        first_name: null,
        last_name: null,
        pid: null,
        relation: null,
        password: null
    }
    componentDidMount(){
        var user = JSON.parse(sessionStorage.getItem("user"));
        var url = '/prisoner_prison/'.concat(user.prison_no);
        var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
        axios({
          method: 'get',
          url: url,
          headers: {'Authorization': header}
        }).then((response) => {
            console.log(response);
            var key = "Prison ".concat(user.prison_no);
            var res = JSON.parse(response.data[key]);
            var length = res.length;
            var select = document.getElementById('pid');
            for(var i=0; i<length; i++){
              var mgr = {};
              mgr.pid = res[i].pid;
              mgr.name = "Prisoner #".concat(res[i].pid);
              select.options.add(new Option(mgr.name, mgr.pid)); 
            } 
        }, (error) => {
          console.log(error);
        });
    }
    HandleSubmit = (e) =>{
        e.preventDefault();
        var rid = document.getElementById("rid").value;
        var last_name = document.getElementById("last_name").value;
        var first_name = document.getElementById("first_name").value;
        var pid = document.getElementById("pid").value;
        var relation = document.getElementById("relation").value;
        var password = document.getElementById("password").value;
        this.setState({
            rid: rid,
            password: password,
            first_name: first_name,
            last_name: last_name,
            pid: pid,
            relation: relation
        }, () => this.AddRelative());
    }
    AddRelative = () => {
        var url = '/relative/'.concat(this.state.pid);
        var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
        axios({
        method: 'post',
        url: url,
        headers: {'Authorization': header},
        data: {
            rid: this.state.rid,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            relation: this.state.relation
        }
    }).then((response) => {
        alert("Successfully added!");
        window.location.href = '/chief_warden/view_relatives';
    }, (error) => {
    console.log(error);
    });
    }
    render() {
        return (
        <div>
        <ChiefWardenNavBar/>
        <div className="RelativeReport">
        <div className = "ReportHeader"> Add Relative</div>
        <br></br>
        <form>
        <table>
        <tbody>
        <tr>
        <td>
        <label htmlFor="rid"> Relative ID: </label>
        </td>
        <td>
        <input type="number" id="rid" />
        </td>
        <td>
        <label htmlFor="password"> Password: </label>
        </td>
        <td>
        <input type="password" id="password" />
        </td>
        </tr>
        <tr>
        <td>
        <label htmlFor="first_name"> First Name: </label>
        </td>
        <td>
        <input type="text" id="first_name" />
        </td>
        <td>
        <label htmlFor="last_name"> Last Name: </label>
        </td>
        <td>
        <input type="text" id="last_name" />
        </td>
        </tr>
        <tr>
        <td>
        <label htmlFor="pid"> Related to Prisoner #: </label>
        </td>
        <td>
        <select type="text" id="pid"> </select>
        </td>
        <td>
        <label htmlFor="relation"> Relation: </label>
        </td>
        <td>
        <input type="text" id="relation" />
        </td>
        </tr>
        </tbody>
        </table>
        </form>
        <br/>
        <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </div>
        </div>
        );
    }
}

export default AddRelativeForm;