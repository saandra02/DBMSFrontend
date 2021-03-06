import React, { Component } from 'react';
import axios from 'axios';
class PrisonerReport extends Component {
  state = {
    pid:null,
    first_name:null, 
    last_name:null,
    age: null,
    entry_date: null,
    ht_in_m: null,
    wt_in_kg: null,
    eye_colour: null,
    hair_colour: null,
    prison_no: null,
    employed_by:null,
    sentence:null,
    fingerprint: null,
    identifying_mark:null,
    affiliation:null,
    crime:null,
    chore:null,
    relative:null
  }
  componentDidMount(){
    var id = this.props.id;
    var url = '/prisoner_report/'.concat(id);
    var header = 'Bearer '.concat(sessionStorage.getItem('access_token'));
    axios({
      method: 'get',
      url: url,
      headers: {'Authorization': header}
    }).then((response) => {
      var key = "Prisoner ".concat(id);
      var res = JSON.parse(response.data[key]);
      var length = res.length;
      var id_marks = [];
      var crimes = [];
      var affiliations = [];
      var chores = [];
      var relatives = [];
      for(var i = 0; i < length; i++)
      {
        var choreobject = {};
        var relativeobject = {};
        choreobject['chore_name'] = res[i].chore_name;
        choreobject['chore_time'] = res[i].chore_time;
        chores[i] = choreobject;
        relativeobject['first_name'] = res[i]['prisonerd6.first_name'];
        relativeobject['last_name'] = res[i]['prisonerd6.last_name'];
        relativeobject['relation'] = res[i].relation;
        relatives[i] = relativeobject;
        console.log(i);
        id_marks[i] = res[i].identifying_mark;
        crimes[i] = " ".concat(res[i].c_name);
        if(res[i].p_2 != null)
        affiliations[i] = " Prisoner ".concat(res[i].p_2);
      }
      console.log(res[0]);
      console.log(chores);
      console.log(relatives);
      //var chores_unique = [...new Set(chores)];
      //console.log(chores_unique);
      //var relatives_unique = [...new Set(relatives)];
      //console.log(relatives_unique);
      var id_marks_unique = [...new Set(id_marks)];
      //console.log(id_marks_unique);
      var crimes_unique = [...new Set(crimes)];
      //console.log(crimes_unique);
      var affiliations_unique = [...new Set(affiliations)];
      //console.log(affiliations_unique);
      var chores_unique = chores.filter((chores, index, self) =>
      index === self.findIndex((t) => (t.chore_time === chores.chore_time)));
      //console.log(chores_unique);
      var relatives_unique = relatives.filter((relatives, index, self) =>
      index === self.findIndex((t) => (t.first_name === relatives.first_name && t.last_name === relatives.last_name && t.relation === relatives.relation)));
      //console.log(relatives_unique);
      this.setState({
        pid:res[0].pid,
        first_name:res[0].first_name, 
        last_name:res[0].last_name,
        age: res[0].age,
        entry_date: res[0].entry_date,
        ht_in_m: res[0].ht_in_m,
        wt_in_kg: res[0].wt_in_kg,
        eye_colour: res[0].eye_colour,
        hair_colour: res[0].hair_colour,
        prison_no: res[0].prison_no,
        employed_by: res[0].employed_by,
        sentence: res[0]['sum(c_years)'],
        fingerprint: res[0].fingerprint,
        identifying_mark:id_marks_unique,
        affiliation:affiliations_unique,
        crime:crimes_unique,
        chore:chores_unique,
        relative:relatives_unique
      })
      this.renderRelatives();
      this.renderChores();
    }, (error) => {
      console.log(error);
    });
  } 
  renderRelatives = () => {
    var table = document.getElementById("relative-section");
    var length = this.state.relative.length;
    table.className = "FunctionTable";
    for(var i = 0; i < length; i++)
    {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      if(this.state.relative[i].first_name !== null)
      cell1.innerHTML = this.state.relative[i].first_name.concat(' ').concat(this.state.relative[i].last_name);
      cell2.innerHTML = this.state.relative[i].relation;
    }
  }
  renderChores = () => {
    var table = document.getElementById("chore-section");
    var length = this.state.chore.length;
    table.className = "FunctionTable";
    for(var i = 0; i < length; i++)
    {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = this.state.chore[i].chore_name;
      cell2.innerHTML = this.state.chore[i].chore_time;
    }
  }
  render() {
    return (
      <div>
      <div className="ReportPrisoner">
        <div className = "ReportHeader"> Prisoner #{this.state.pid} </div>
        <br></br>
        <form>
          <p className = "ReportSubheading"> Personal Details</p>
          <table className = "ReportTable">
          <tbody>
          <tr>
          <td>
          <label htmlFor="first_name"> First Name: </label>
          </td>
          <td>
          <input type="text" id="first_name" value={this.state.first_name} disabled />
          </td>
          <td>
            <label htmlFor="last_name"> Last Name: </label>
          </td>
          <td>
            <input type="text" id="last_name" value={this.state.last_name} disabled />
          </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="ht_in_m"> Height (in m): </label>
            </td>
            <td>
              <input type="text" id="ht_in_m" value={this.state.ht_in_m} disabled /> 
            </td>
            <td>
              <label htmlFor="wt_in_kg"> Weight (in kg): </label>
            </td>
            <td>
            <input type="text" id="wt_in_kg" value={this.state.wt_in_kg} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="eye_colour"> Eye Colour: </label>
            </td>
            <td>
              <input type="text" id="eye_colour" value={this.state.eye_colour} disabled />
            </td>
            <td>
              <label htmlFor="hair_colour"> Hair Colour: </label>
            </td>
            <td>
              <input type="text" id="hair_colour" value={this.state.hair_colour} disabled /> 
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="age"> Age: </label>
            </td>
            <td>
              <input type="text" id="age" value={this.state.age} disabled />
            </td>

            <td>
              <label htmlFor="fingerprint"> Fingerprint: </label>
            </td>
            <td>
              <input type="text" id="fingerprint" value={this.state.fingerprint} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="identifying_mark"> Identifying Mark: </label>
            </td>
            <td colSpan = '2'>
              <input type="text" id="identifying_mark" value={this.state.identifying_mark} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="affiliation"> Affiliation: </label>
            </td>
            <td colSpan = '2'>
              <input type="text" id="affiliation" value={this.state.affiliation} disabled />
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
            </tr>
            <tr>
              <td>
                <label htmlFor="entry_date"> Entry Date: </label>
              </td>
              <td>
              <input type="text" id="entry_date" value={this.state.entry_date} disabled />
              </td>
              <td>
              <label htmlFor="sentence"> Sentence (Years): </label>
              </td>
              <td>
              <input type="text" id="sentence" value={this.state.sentence} disabled />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="employed_by"> Employer ID: </label> 
              </td>
              <td>
              <input type="text" id="employed_by" value={this.state.employed_by} disabled />
              </td>
            </tr>
            </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Task Details </p>
          <table id = "chore-section">
            <tbody>
            <td>
            <label htmlFor="chore_name"> Chore </label>
            </td>
            <td>
            <label htmlFor="chore_time" > Chore Time </label> 
            </td>
            </tbody>
          </table>
          <br/>
          <p className = "ReportSubheading"> Crime History</p>
          <table className = "ReportTable">
          <tbody>
            <tr>
              <td>
              <input type="text" id="crime" value={this.state.crime} disabled /> 
              </td>
            </tr>
          </tbody>
          </table >
          <br/>
          <p className = "ReportSubheading"> Registered Relatives</p>
          <table id="relative-section">
          <tbody>
            <td>
            <label htmlFor="relative_name"> Name </label> 
            </td>
            <td>
            <label htmlFor="relative_relation"> Relation </label> 
            </td>
            </tbody>
          </table>
        </form>
        <br/>
      </div>
      </div>
    );
  }
}

export default PrisonerReport;