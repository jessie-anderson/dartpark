import ResultItem from './spot-list-item';
import React, { Component } from 'react';
import { Link } from 'react-router';
import CardItemRender from './payment-render';
const test = require('braintree-web');
console.log(test);

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
      authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJhMWQyYmJhZGI3OTE5NGNiNGE2NjAyY2JmMGEwNWI0MWVhZTMwZDJhZTBmMDBhNGYwOGQ3YWZlNTYwYzM3NWYyfGNyZWF0ZWRfYXQ9MjAxNi0wOC0yM1QwMzowMToxMS4zNDMxNDY0MTQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0',
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
