import ResultItem from './spot-list-item';
import React, { Component } from 'react';
import { Link } from 'react-router';
import CardItemRender from './payment-render';
const braintree = require('braintree-web');

class BuyItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      localNumber: '',
      localExpirationMonth: '',
      localExpirationYear: '',
      localCvv: '',
      localPostalCode: '',
    };

    braintree.client.create({
      authorization: 'CLIENT_AUTHORIZATION',
    }, function (clientErr, clientInstance) {
      if (clientErr) {
    // Handle error in client creation
        return;
      }
      const options = {
        client: clientInstance,
        styles: {
      /* ... */
        },
        fields: {
          number: {
            selector: '#cc-number',
          },
          expirationMonth: {
            selector: '#expiration-month',
          },
          expirationYear: {
            selector: '#expiration-year',
          },
          cvv: {},
          postalCode: {
            selector: '#cvv',
          },
        },
      };

      braintree.hostedFields.create(options, function (hostedFieldsErr, hostedFieldsInstance) {
        if (hostedFieldsErr) {
      // Handle error in Hosted Fields creation
          return;
        }

    // Use the Hosted Fields instance here to tokenize a card
      });
    });
  }

  onExpDateChange(event) {
    console.log(event.target.value);
    const wholeDate = event.target.value.split('-');
    console.log(wholeDate[1]);
    console.log(wholeDate[0]);
  }

  render() {
    return (
      <div>
        <form action="/" id="my-sample-form">
          <input type="hidden" name="payment_method_nonce" />
          <label htmlFor="card-number">Card Number</label>
          <div id="card-number"></div>

          <label htmlFor="cvv">CVV</label>
          <div id="cvv"></div>

          <lable htmlFor="expiration-month" />
          <div id="expiration-month" />

          <input id="my-submit" type="submit" value="Pay" disabled />
        </form>
      </div>
    );
  }
}
export default BuyItem;

// const BuyItem = (props) => {
//   return (
//     <div>
//       <h3>Spot Details</h3>
//       <ResultItem />
//       <h3>Payment Info</h3>
//       <CardItemRender />
//       <Link to="/renter"><button>Buy Spot!</button></Link>
//     </div>
//     );
// };
//
// export default BuyItem;
