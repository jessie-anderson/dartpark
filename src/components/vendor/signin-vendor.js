import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signinVendor } from '../../actions/user-actions';

class SignInVendor extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '', loginFail: false };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.signin = this.signin.bind(this);
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  signin() {
    if (this.props.signinVendor(this.state)) {
      console.log('logged in');
      this.setState({ loginFail: false });
    } else {
      console.log('did not login');
      this.setState({ loginFail: true });
    }
  }
  renderLoginError() {
    if (this.state.loginFail) {
      return (
        <div id="login-fail">
          {'It seems that you don\'t have an account, try signing up!'}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
  render() {
    return (
      <div id="sign-in-renter">
        <div id="center-content">
          <div id="box">
            <h1>Sign In</h1>
            <div id="sign-in-form">
              <input onChange={this.onEmailChange} placeholder={"Email..."} />
              <input onChange={this.onPasswordChange} type="password" placeholder={"Password..."} />
            </div>
            <button id="btn1" onClick={this.signin}>Sign In</button>
          </div>
          <div>{this.renderLoginError()}</div>
          <span>{'Don\'t have an account?'}</span>
          <Link to={'/signup-vendor'} id="btn2"><button>Sign Up</button></Link>
          <Link to={'/'} id="std-light-btn"><button> Back</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinVendor })(SignInVendor);
