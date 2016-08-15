import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { };
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <h2>Sign up via:</h2>
        <button>Login with Facebook</button>
        <button>Login with Google</button>
        <span>`Don't have an account?`</span>
        <p>Actually I do have an account!</p>
        <Link to="/signin"><button>Back to Sign In</button></Link>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default SignUp;
