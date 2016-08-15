import React from 'react';
import { Link } from 'react-router';

const RenterHome = (props) => {
  return (
    <div>
      <p>SUCCESS YOU BOUGHT A SPOT!!</p>
      <Link to="/renter/search"><button>Search more!</button></Link>
    </div>
    );
};

export default RenterHome;
