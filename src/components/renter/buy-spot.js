import ResultItem from './spot-list-item';
import React from 'react';
import { Link } from 'react-router';
import CardItemRender from './payment-render';
// var braintree = require('braintree-web');
//
// braintree.client.create({
//   authorization: 'CLIENT_AUTHORIZATION',
// }, function (err, clientInstance) {
//   braintree.hostedFields.create(/* ... */);
// });
//


// corresponds to FindSpot-Select on mockups


const BuyItem = (props) => {
  return (
    <div>
      <h3>Spot Details</h3>
      <ResultItem />
      <h3>Payment Info</h3>
      <CardItemRender />
      <Link to="/renter"><button>Buy Spot!</button></Link>
    </div>
    );
};

export default BuyItem;
