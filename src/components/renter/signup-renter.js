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
      <div>
        <div id="header-bar">dartPark</div>
        <div id="abs-center">
          <h1>Sign Up</h1>
          <h4>Enter your email:</h4>
          <input onChange={this.onEmailChange} placeholder={"Email..."} />
          <h4>Enter your password:</h4>
          <input onChange={this.onPasswordChange} placeholder={"Password..."} />
          <h4>Enter your name:</h4>
          <input onChange={this.onNameChange} placeholder={"Name..."} />
          <button onClick={this.signupRenter}>Sign Up</button>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupRenter })(SignUpRenter);
