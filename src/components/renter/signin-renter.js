import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signinRenter } from '../../actions/user-actions';

class SignInRenter extends Component {
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
    this.props.signinRenter(this.state);
  }
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <h3>Login</h3>
        <input onChange={this.onEmailChange} placeholder={"Email..."} />
        <input onChange={this.onPasswordChange} placeholder={"Password..."} />
        <button onClick={this.signin}>Sign In</button>
        <span>`Don't have an account?`</span>
        <Link to={'/signup-renter'}><button>Sign Up</button></Link>
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
export default connect(null, { signinRenter })(SignInRenter);
