import React from 'react';
// let FontAwesome = require('react-fontawesome');

import { Link } from 'react-router';


// function based "dumb" component with no state
const selectActType = () => {
  return (
    <div>
      <h1>Select Account Type</h1>
      <Link to={'/studentAuth'}><button>Renter</button></Link>
      <Link to={'/signup'}><button>Vendor</button></Link>
    </div>
  );
};


export default selectActType;
