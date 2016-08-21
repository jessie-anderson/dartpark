import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignUpRenter extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { };
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div>
        <div id="header-bar">dartPark</div>
        <div id="abs-center">
          <h1>Sign Up</h1>
          <h4>Enter your email:</h4>
          <input onChange={this.onEmailChange} placeholder={"Email..."} />
          <h4>Enter your password:</h4>
          <input onChange={this.onPasswordChange} placeholder={"Password..."} />
          <span>{'Don\'t have an account?'}</span>
          <Link to={'/selectType'}><button>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default SignUpRenter;
