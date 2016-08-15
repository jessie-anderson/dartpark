import React from 'react';
// let FontAwesome = require('react-fontawesome');

import { Link } from 'react-router';


// function based "dumb" component with no state
const studentAuth = () => {
  return (
    <div>
      <h1>Select Student Authentication</h1>
      <h3>Note: Renter accounts can only be created by Dartmouth students</h3>
      <p>Please enter your Dartmouth blitz</p>
      <div>
        <input placeholder={"Email..."} />
        <button>Submit</button>
      </div>
      <p>This will be replaced with actual authorization later:</p>
      <Link to={'/signup'}><button>Continue to sign up...</button></Link>
    </div>
  );
};


export default studentAuth;
