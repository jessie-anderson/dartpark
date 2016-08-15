import ResultItem from './spot-list-item';
import React from 'react';
import { Link } from 'react-router';
// import CardItemRender from './payment-render';


// corresponds to FindSpot-Select on mockups

const BuyItem = (props) => {
  return (
    <div>
      <h3>Spot Details</h3>
      <ResultItem />
      <p>payment info still to be added!!!</p>
      <Link to="/renter"><button>Buy Spot!</button></Link>
    </div>
    );
};

export default BuyItem;
