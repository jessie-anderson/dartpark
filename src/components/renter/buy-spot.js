import ResultItem from './spot-list-item';
import React, { Component } from 'react';
import { Link } from 'react-router';
import CardItemRender from './payment-render';
require('dotenv').config();
const braintree = require('braintree-web');

class BuyItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      // form: document.querySelector('#checkout-form'),
      // submit: document.querySelector('input[type="submit"]'),
    };
    var submitBtn = document.getElementById('my-submit');
    var form = document.getElementById('my-sample-form');

    braintree.client.create({
      authorization: process.env.BT_AUTH,
    }, clientDidCreate);

    function clientDidCreate(err, client) {
      braintree.hostedFields.create({
        client,
        styles: {
          'input': {
            'font-size': '16pt',
            'color': '#3A3A3A',
          },

          '.number': {
            'font-family': 'monospace',
          },

          '.valid': {
            'color': 'green',
          },
        },
        fields: {
          number: {
            selector: '#card-number',
          },
          cvv: {
            selector: '#cvv',
          },
          expirationDate: {
            selector: '#expiration-date',
          },
        },
      }, hostedFieldsDidCreate);
    }

    function hostedFieldsDidCreate(err, hostedFields) {
      submitBtn.addEventListener('click', submitHandler.bind(null, hostedFields));
      submitBtn.removeAttribute('disabled');
    }

    function submitHandler(hostedFields, event) {
      event.preventDefault();
      submitBtn.setAttribute('disabled', 'disabled');

      hostedFields.tokenize(function (err, payload) {
        if (err) {
          submitBtn.removeAttribute('disabled');
          console.error(err);
        } else {
          form['payment_method_nonce'].value = payload.nonce;
          form.submit();
        }
      });
    }
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

          <label htmlFor="expiration-date">Expiration Date</label>
          <div id="expiration-date"></div>

          <input id="my-submit" type="submit" value="Pay" disabled />
        </form>
      </div>
    );
  }
}
export default BuyItem;

//
// class BuyItem extends Component {
//   constructor(props) {
//     super(props);
//
//     // init component state here
//     this.state = {
//       // form: document.querySelector('#checkout-form'),
//       // submit: document.querySelector('input[type="submit"]'),
//     };
//     var submitBtn = document.getElementById('my-submit');
//     var form = document.getElementById('my-sample-form');
//
//     braintree.client.create({
//       authorization: process.env.BT_AUTH,
//     }, clientDidCreate);
//
//     function clientDidCreate(err, client) {
//       braintree.hostedFields.create({
//         client,
//         styles: {
//           'input': {
//             'font-size': '16pt',
//             'color': '#3A3A3A',
//           },
//
//           '.number': {
//             'font-family': 'monospace',
//           },
//
//           '.valid': {
//             'color': 'green',
//           },
//         },
//         fields: {
//           number: {
//             selector: '#card-number',
//           },
//           cvv: {
//             selector: '#cvv',
//           },
//           expirationDate: {
//             selector: '#expiration-date',
//           },
//         },
//       }, hostedFieldsDidCreate);
//     }
//
//     function hostedFieldsDidCreate(err, hostedFields) {
//       submitBtn.addEventListener('click', submitHandler.bind(null, hostedFields));
//       submitBtn.removeAttribute('disabled');
//     }
//
//     function submitHandler(hostedFields, event) {
//       event.preventDefault();
//       submitBtn.setAttribute('disabled', 'disabled');
//
//       hostedFields.tokenize(function (err, payload) {
//         if (err) {
//           submitBtn.removeAttribute('disabled');
//           console.error(err);
//         } else {
//           form['payment_method_nonce'].value = payload.nonce;
//           form.submit();
//         }
//       });
//     }
//   }
//
//
//   render() {
//     return (
//       <div>
//         <form action="/" id="my-sample-form">
//           <input type="hidden" name="payment_method_nonce" />
//           <label htmlFor="card-number">Card Number</label>
//           <div id="card-number"></div>
//
//           <label htmlFor="cvv">CVV</label>
//           <div id="cvv"></div>
//
//           <label htmlFor="expiration-date">Expiration Date</label>
//           <div id="expiration-date"></div>
//
//           <input id="my-submit" type="submit" value="Pay" disabled />
//         </form>
//       </div>
//     );
//   }
// }
// export default BuyItem;


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
