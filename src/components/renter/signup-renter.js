// renter signup component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupRenter } from '../../actions/user-actions';


class SignUpRenter extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '', username: '' };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.signupRenter = this.signupRenter.bind(this);
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onNameChange(event) {
    this.setState({ username: event.target.value });
  }
  signupRenter() {
    this.props.signupRenter(this.state);
  }
  render() {
    return (
      <div id="sign-in-renter">
        <div id="center-content">
          <div id="box">
            <h1>Sign Up</h1>
            <input onChange={this.onEmailChange} placeholder={"Email..."} />
            <input onChange={this.onPasswordChange} type="password" placeholder={"Password..."} />
            <input onChange={this.onNameChange} placeholder={"Name..."} />
            <div id="btn3">
              <button onClick={this.signupRenter}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupRenter })(SignUpRenter);
