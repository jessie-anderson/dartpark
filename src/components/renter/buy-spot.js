import ResultItem from './spot-list-item';
import React, { Component } from 'react';
import { Link } from 'react-router';
import CardItemRender from './payment-render';
// import { braintree } from 'braintree-web';

let braintree = require('braintree-web');

class BuyItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      form: document.querySelector('#checkout-form'),
      submit: document.querySelector('input[type="submit"]'),
    };
    // var form = document.querySelector('#checkout-form');
    // var submit = document.querySelector('input[type="submit"]');

    braintree.client.create({
      // Replace this with your own authorization.
      authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIwNzBmM2E3M2IwYjM4NTU4Y2RjZTBlNTFlYzM0MWQ4NTc2MDRjYmEzYWQ1YzJlNDFlZmI0NTE3MDgyOGRmMWJifGNyZWF0ZWRfYXQ9MjAxNi0wOC0yMVQxODozMzowMS4yNTI2NTM1NDIrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=',
    }, function (clientErr, clientInstance) {
      if (clientErr) {
        // Handle error in client creation
        return;
      }

      braintree.hostedFields.create({
        client: clientInstance,
        styles: {
          'input': {
            'font-size': '14pt',
          },
          'input.invalid': {
            'color': 'red',
          },
          'input.valid': {
            'color': 'green',
          },
        },
        fields: {
          number: {
            selector: '#card-number',
            placeholder: '4111 1111 1111 1111',
          },
          cvv: {
            selector: '#cvv',
            placeholder: '123',
          },
          expirationDate: {
            selector: '#expiration-date',
            placeholder: '10 / 2019',
          },
        },
      }, function (hostedFieldsErr, hostedFieldsInstance) {
        if (hostedFieldsErr) {
          // Handle error in Hosted Fields creation
          return;
        }

        this.state.submit.removeAttribute('disabled');

        this.state.form.addEventListener('submit', function (event) {
          event.preventDefault();

          hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
            if (tokenizeErr) {
              // Handle error in Hosted Fields tokenization
              return;
            }

            // Put `payload.nonce` into the `payment-method-nonce` input, and then
            // submit the form. Alternatively, you could send the nonce to your server
            // with AJAX.
            document.querySelector('input[name="payment-method-nonce"]').value = payload.nonce;
            this.state.form.submit();
          });
        }, false);
      });
    });
  }


  render() {
    return (
      <div>
        {this.state.form}
        {this.state.submit}
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
