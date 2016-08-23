import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signinVendor } from '../../actions/user-actions';

class SignInVendor extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '' };

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
    this.props.signinVendor(this.state);
  }
  render() {
    return (
      <div>
        <div id="header-bar">dartPark</div>
        <div id="abs-center">
          <h1>Sign In</h1>
          <h3>Login</h3>
          <input onChange={this.onEmailChange} placeholder={"Email..."} />
          <input onChange={this.onPasswordChange} placeholder={"Password..."} />
          <button onClick={this.signin}>Sign In</button>
          <span>{'Don\'t have an account?'}</span>
          <Link to={'/signup-vendor'}><button>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinVendor })(SignInVendor);
