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
      <div id="sign-in-renter">
        <div id="center-content">
          <div id="box">
            <h1>Sign Up</h1>
            <input onChange={this.onEmailChange} placeholder={"Email..."} />
            <input onChange={this.onPasswordChange} type="password" placeholder={"Password..."} />
            <input onChange={this.onNameChange} placeholder={"Name..."} />
            <div id="btn3">
              <button onClick={this.onSubmit}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupVendor })(SignUpVendor);
