import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignInVendor extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { email: '', password: '' };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
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
          <h1>Sign In</h1>
          <h3>Login</h3>
          <input onChange={this.onEmailChange} placeholder={"Email..."} />
          <input onChange={this.onPasswordChange} placeholder={"Password..."} />
          <button>Login with Facebook</button>
          <button>Login with Google</button>
          <span>"Don't have an account?"</span>
          <Link to={'/selectType'}><button>Sign Up</button></Link>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => (
//   {
//     email: state.email,
//     password: state.password,
//   }
// );
// react-redux glue -- outputs Container that know state in props
export default SignInVendor;
