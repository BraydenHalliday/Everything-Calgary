import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  render() {
    const login = e => {
      e.preventDefault()
      this.props.login(e.target.elements["Password"].value,);
    };
    return(
      <form onSubmit={this.login}>
        <label>
         Password:
        <input type="text" name="Password"/>
        </label>
        <input type="submit" value="Submit" />
</form>



    )
  }
}
export default Login;