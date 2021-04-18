import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar';
import axios from 'axios';

class CWAddPrisonerForm extends Component {
  state = {
    pid:null,
    password: null,
    first_name:null, 
    last_name:null,
    age: null,
    entry_date: null,
    ht_in_m: null,
    wt_in_kg: null,
    eye_colour: null,
    hair_colour: null,
    prison_no: null,
    identifying_mark:null,
    affiliation:null,
    crime:null,
  }
  componentDidMount(){
    var user = JSON.parse(sessionStorage.getItem("user"));
    var url = '/prisoner_form_details/'.concat(user.prison_no);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    this.setState({
      prison_no: user.prison_no
    });
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
        var key = "Prison ".concat(user.prison_no);
        var res = JSON.parse(response.data[key]);
        console.log(res);
        var length = res.length;
        var prisoners = []
        var crimes = []
        for(var i=0; i<length; i++){
          var crime = {};
          crime.cid = res[i].cid;
          crime.cname = res[i].c_name;
          crimes[i] = crime;
          prisoners[i] = res[i].pid;
        }
        var prisoners_unique = [...new Set(prisoners)];
        var crimes_unique = crimes.filter((crimes, index, self) =>
        index === self.findIndex((t) => (t.cid === crimes.cid)));

        var p_length = prisoners_unique.length;
        var c_length = crimes_unique.length;

        var p_select= document.getElementById('prisoners');
        var c_select = document.getElementById('crimes');
        for(var j=0; j<p_length; j++){
          var pr = {};
          pr.pid = prisoners_unique[j];
          pr.name = "Prisoner #".concat(prisoners_unique[j]);
          p_select.options.add(new Option(pr.name, pr.pid));
        }
        for(var k=0; k<c_length; k++){
          c_select.options.add(new Option(crimes_unique[k].cname, crimes_unique[k].cid));
        }
     
    }, (error) => {
      console.log(error);
    });
  }
  
  HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding prisoner...");
    var pid = document.getElementById("pid").value;
    var password = document.getElementById("password").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var ht_in_m = document.getElementById("ht_in_m").value;
    var wt_in_kg = document.getElementById("wt_in_kg").value;
    var eye_colour = document.getElementById("eye_colour").value;
    var hair_colour = document.getElementById("hair_colour").value;
    var entry_date = document.getElementById("entry_date").value;
    var c_select = document.getElementById("crimes");
    var crime = Array.from(c_select.selectedOptions).map(v=>v.value);
    var p_select = document.getElementById('prisoners');
    var affiliation = Array.from(p_select.selectedOptions).map(v=>v.value);
    var id_marks = document.getElementById('identifying_mark').value.split(',');

    console.log(crime);

    this.setState({
        pid:pid,
        password: password,
        first_name:first_name, 
        last_name:last_name,
        age: age,
        entry_date: entry_date,
        ht_in_m: ht_in_m,
        wt_in_kg: wt_in_kg,
        eye_colour: eye_colour,
        hair_colour: hair_colour,
        identifying_mark:id_marks,
        affiliation:affiliation,
        crime:crime,
    }, ()=>this.AddPrisoner());
  }

  AddPrisoner = () => {
    var url = '/prisoner/'.concat(this.state.pid);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'post',
      url: url,
      headers: {'Authorization': header},
      data: {
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        age: this.state.age,
        ht_in_m: this.state.ht_in_m,
        wt_in_kg: this.state.wt_in_kg,
        hair_colour: this.state.hair_colour,
        eye_colour: this.state.eye_colour,
        fingerprint: null,
        visits_made: 5,
        prison_no: this.state.prison_no,
        employed_by:null,
        entry_date: this.state.entry_date,
        cid: this.state.crime,
        pid: this.state.affiliation,
        identifying_mark: this.state.identifying_mark
      }
    }).then((response) => {
      alert("Successfully added!");
      window.location.href = '/chief_warden/view_prisoners';
    }, (error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
      <ChiefWardenNavBar />
      <div className="ReportPrisoner Add-Prisoner">
        <div className = "ReportHeader"> Add New Prisoner </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
          <td>
          <label htmlFor="pid"> Prisoner ID: </label>
          </td>
          <td>
          <input type="number" id="pid"/>
          </td>
          <td>
            <label htmlFor="password"> Password: </label>
          </td>
          <td>
            <input type="password" id="password"/>
          </td>
          </tr>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td>
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
              <label htmlFor="ht_in_m"> Height (in m): </label>
            </td>
            <td>
              <input type="text" id="ht_in_m"/> 
            </td>
            <td>
              <label htmlFor="wt_in_kg"> Weight (in kg): </label>
            </td>
            <td>
            <input type="text" id="wt_in_kg"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="eye_colour"> Eye Colour: </label>
            </td>
            <td>
              <input type="text" id="eye_colour"/>
            </td>
            <td>
              <label htmlFor="hair_colour"> Hair Colour: </label>
            </td>
            <td>
              <input type="text" id="hair_colour"/> 
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="age"> Age: </label>
            </td>
            <td>
              <input type="number" id="age"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="identifying_mark"> Identifying Marks: </label>
            </td>
            <td colSpan = '2'>
              <input type="text" id="identifying_mark"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="affiliation"> Affiliation: </label>
            </td>
            <td colSpan = '2'>
            <select id='prisoners' multiple>
            </select>
            </td>
          </tr>
          </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Prison Time Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
            <td>
              <label htmlFor="prison_no"> Prison Number: </label>
            </td>
            <td>
              <input type="text" id="prison_no" value={this.state.prison_no} disabled />
              </td>
              <td>
                <label htmlFor="entry_date"> Entry Date: </label>
              </td>
              <td>
              <input type="date" id="entry_date"/>
              </td>
            </tr>
            </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Crime History</p>
          <table className = "ReportTable">
          <tbody>
            <tr>
            <td>
              <label htmlFor='crimes'> Crimes Committed: </label>
            </td>
            </tr>
            <tr>
              <td>
              <select id='crimes' multiple>
              </select> 
              </td>
            </tr>
          </tbody>
          </table>
          <div className="add-form-button">
          <button onClick={this.HandleSubmit} className="Submit"> Submit </button>
          </div>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default CWAddPrisonerForm;