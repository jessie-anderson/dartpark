import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signupRenter } from '../../actions/spot-actions';


class SignUpRenter extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '' };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.signUpRenter = this.signUpRenter.bind(this);
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  signUpRenter(event) {
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
          <button onClick={this.signUpRenter}>Sign Up</button>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupRenter })(SignUpRenter);
