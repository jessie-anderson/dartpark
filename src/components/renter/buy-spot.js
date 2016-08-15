import ResultItem from './spot-list-item';
import React from 'react';
import { Link } from 'react-router';


// corresponds to FindSpot-Select on mockups

const BuyItem = (props) => {
  return (
    <div>
      <p>Spot Details</p>
      <p><b>BUY SPOT BUY SPOT BUY SPOT</b></p>
      <p><b>BUY SPOT BUY SPOT BUY SPOT</b></p>
      <p><b>BUY SPOT BUY SPOT BUY SPOT</b></p>
      <ResultItem />
      <p>Payment Info To Be Added</p>
      <Link to="/renter"><button>Buy Spot!</button></Link>
    </div>
    );
};

export default BuyItem;
