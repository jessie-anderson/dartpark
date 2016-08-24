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
      // theHostedField: '',
      // theHostedFieldErr: '',
    };


    this.onPaySubmit = this.onPaySubmit.bind(this);
  }

  onExpDateChange(event) {
    console.log(event.target.value);
    const wholeDate = event.target.value.split('-');
    console.log(wholeDate[1]);
    console.log(wholeDate[0]);
  }

  onPaySubmit(event) {
    braintree.client.create({
      authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTNkMjM4MjY4Y2U5NGRhZDIyZjU1YjdhYmQ4ODM2YjMzMDU0ZjIyMGQ5OTQyYzA2NjYzOGYyNmM2YmI1OTU4fGNyZWF0ZWRfYXQ9MjAxNi0wOC0yNFQxNzoyNzo1MC43NDU2MzI4NzUrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0',
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
        hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
          if (tokenizeErr) {
            console.error(tokenizeErr);
            return;
          }

              // If this was a real integration, this is where you would
              // send the nonce to your server.
          console.log('Got a nonce: ' + payload.nonce);
        });
      });
    });

    // console.log(this.state.hostedFieldsErr);
    // event.preventDefault();
    // if (this.state.hostedFieldsErr) {
    //   console.error(this.state.hostedFieldsErr);
    //   return;
    // }
    // this.state.theHostedField.tokenize(function (tokenizeErr, payload) {
    //   if (tokenizeErr) {
    //     console.log(tokenizeErr);
    //     return;
    //   }
    //   console.log('nonce: ' + payload.nonce);
    // });
  }

  render() {
    return (
      <div>
        <form action="/" id="my-sample-form">
          <input type="hidden" name="payment_method_nonce" />
          <label htmlFor="card-number">Card Number</label>
          <input id="card-number" />

          <label htmlFor="cvv">CVV</label>
          <input id="cvv" />

          <label htmlFor="expiration">Expiration Date:</label>
          <div id="expiration">
            <label htmlFor="#expiration-month">Expiration Month:</label>
            <input id="#expiration-month" />
            <label htmlFor="#expiration-year">Expiration Year:</label>
            <input id="#expiration-year" />
          </div>


          <input onClick={this.onPaySubmit} id="my-submit" type="submit" value="Pay" />
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
