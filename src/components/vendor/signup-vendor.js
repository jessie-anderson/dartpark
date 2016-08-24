import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { signupVendor } from '../../actions/user-actions';

class SignUpVendor extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // init component state here
    this.state = {
      email: '',
      password: '',
      username: '',
    };
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
  onSubmit() {
    this.props.signupVendor(this.state);
  }
  render() {
    return (
      <div>
        <div id="abs-center">
          <h1>Sign Up</h1>
          <h4>Enter your email:</h4>
          <input onChange={this.onEmailChange} placeholder={"Email..."} />
          <h4>Enter your password:</h4>
          <input onChange={this.onPasswordChange} placeholder={"Password..."} />
          <h4>Enter your name</h4>
          <input onChange={this.onNameChange} placeholder={"Name..."} />
          <button onClick={this.onSubmit}>Sign Up</button>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupVendor })(SignUpVendor);
