import React from 'react';
import ResultItem from './spot-list-item';
import { Link } from 'react-router';


// corresponds to FindSpot-Search on mockups

const SpotDetail = (props) => {
  return (
    <div>
      <p>Spot Details</p>
      <ResultItem />
      <Link to="/renter/buy-spot"><button>Get this spot</button></Link>
    </div>
    );
};

export default SpotDetail;
