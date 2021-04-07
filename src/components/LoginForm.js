import React, { Component } from 'react';
import axios from 'axios';
class LoginForm extends Component {
  state = {
      username: null, 
      password: null,
      role: null
  }
  componentDidMount(){
    let role = this.props.match.params.role;
    this.setState({
      role: role
    }) 
  }
  ChangeLogin = (e) =>{
      this.setState({role: e.target.id});
  }

  LoginFun = (e) =>{
    e.preventDefault();
    if(this.state.role==="Prisoner"){
      axios({
        method: 'post',
        url: '/prisoner_login',
        data: {
          pid: this.state.username,
          password: this.state.password
        }
      }).then((response) => {
        var key = "User ".concat(this.state.username);
        console.log(response);
        //console.log((JSON.parse(response.data[key]))[0].pid);
        sessionStorage.setItem("access_token",response.data.access_token);
        sessionStorage.setItem("user", JSON.stringify((JSON.parse(response.data[key]))[0]));
        window.location.href = "/prisoner";
      }, (error) => {
        console.log(error);
      });
    } else if(this.state.role==="Employee"){
      axios({
        method: 'post',
        url: '/official_login',
        data: {
          empid: this.state.username,
          password: this.state.password
        }
      }).then((response) => {
        var key = "User ".concat(this.state.username);
        console.log(response);
        console.log((JSON.parse(response.data[key]))[0]);
        sessionStorage.setItem("access_token",response.data.access_token);
        sessionStorage.setItem("user", JSON.stringify((JSON.parse(response.data[key]))[0]));
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(user.type==="Guard"){
          window.location.href = '/guard';
        } else if(user.type==="Warden"){
          window.location.href = '/warden';
        } else if(user.type==="Chief Warden"){
          window.location.href = '/chiefwarden';
        }
      }, (error) => {
        console.log(error);
      });
    } else if(this.state.role==="Relative"){
      sessionStorage.setItem("id", this.state.username);
      axios({
        method: 'post',
        url: '/relative_login',
        data: {
          rid: this.state.username,
          password: this.state.password
        }
      }).then((response) => {
        var key = "User ".concat(this.state.username);
        console.log(response);
        //console.log((JSON.parse(response.data[key]))[0].pid);
        sessionStorage.setItem("access_token",response.data.access_token);
        sessionStorage.setItem("user", JSON.stringify((JSON.parse(response.data[key]))[0]));
        window.location.href = "/relative";
      }, (error) => {
        sessionStorage.removeItem("id");
        console.log(error);
      });
    } else if(this.state.role==="Business"){
      sessionStorage.setItem("id", this.state.username);
      axios({
        method: 'post',
        url: '/business_login',
        data: {
          bid: this.state.username,
          password: this.state.password
        }
      }).then((response) => {
        sessionStorage.setItem("access_token",response.data.access_token);
        window.location.href = '/business';
      }, (error) => {
        sessionStorage.removeItem("id");
        console.log(error);
      });

    }
  }

  ChangeUsername = (e) => {
    this.setState({
      username : e.target.value
    })
  }
  ChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    console.log(this.props);
    return (
      <div className="LoginForm">
        <div className = "LoginHeader"> {this.state.role} Login </div>
        <form onSubmit={this.LoginFun}>
            <br></br>
            <input type="text" id="username" placeholder="User ID" onChange={this.ChangeUsername}/><br/><br/>
            <input type="password" id="password" placeholder = "Password" onChange={this.ChangePassword}/><br/><br/>
            <button className="Submit"> Login </button>
        </form>
        <br/>
        <div className="OtherLogins">
            <span onClick={this.ChangeLogin} id="Employee"> Employee Login</span> |
            <span onClick={this.ChangeLogin} id="Prisoner"> Prisoner Login</span> |
            <span onClick={this.ChangeLogin} id="Relative"> Relative Login</span> |
            <span onClick={this.ChangeLogin} id="Business"> Business Login</span> 
        </div>
      </div>
    );
  }
}

export default LoginForm;