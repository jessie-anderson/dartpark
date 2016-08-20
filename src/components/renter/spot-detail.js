import React from 'react';
import ResultItem from './spot-list-item';
import { Link } from 'react-router';


// corresponds to FindSpot-Search on mockups

const SpotDetail = (props) => {
  return (
    <div>
      <h3>Spot Details</h3>
      <ResultItem />
      <Link to="/renter/vendor-view"><button>Learn more about this vendor</button></Link>
      <Link to="/renter/buy-spot"><button>Get this spot</button></Link>
    </div>
    );
};

export default SpotDetail;
