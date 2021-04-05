import React, { Component } from 'react';

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
      var link = "/prisoner/".concat(this.state.username);
      console.log(link);
      console.log(this.state);
      window.location.href = link;
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
            <input type="text" id="username" placeholder="Username" onChange={this.ChangeUsername}/><br/><br/>
            <input type="text" id="password" placeholder = "Password" onChange={this.ChangePassword}/><br/><br/>
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