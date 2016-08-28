// import ResultItem from './spot-list-item';
import React, { Component } from 'react';
// import { Link } from 'react-router';
// import CardItemRender from './payment-render';
import braintree from 'braintree-web';
import { connect } from 'react-redux';
import { getAuthorization, sendPayment } from '../../actions/payment-actions';
import { buySpot } from '../../actions/spot-actions';
import { createConversation } from '../../actions/message-actions';


class BuyItem extends Component {
  constructor(props) {
    super(props);

    this.onPaymentSubmit = this.onPaymentSubmit.bind(this);
    // init component state here
    this.state = {
      nonce: null,
    };

    this.hostedFieldsInstance = null;
    // this.onPaySubmit = this.onPaySubmit.bind(this);
  }

  componentWillMount() {
    this.props.getAuthorization();
  }

  componentWillReceiveProps(props) {
    const form = document.querySelector('#checkout-form');
    const submit = document.querySelector('input[type="submit"]');
    console.log(props.paymentToken);

    braintree.client.create({
  // Replace this with your own authorization.
      authorization: props.paymentToken,
    }, (clientErr, clientInstance) => {
      if (clientErr) {
        console.log('clientErr:');
        console.log(clientErr);
      }

      braintree.hostedFields.create({
        client: clientInstance,
        styles: {
          input: {
            'font-size': '14pt',
          },
          'input.invalid': {
            color: 'red',
          },
          'input.valid': {
            color: 'green',
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
          expirationYear: {
            selector: '#expiration-year',
            placeholder: '2020',
          },
          expirationMonth: {
            selector: '#expiration-month',
            placeholder: '6',
          },
          // expirationDate: {
          //   selector: '#expiration-date',
          //   placeholder: '10 / 2019',
          // },
        },
      }, (hostedFieldsErr, hostedFieldsInstance) => {
        if (hostedFieldsErr) {
          console.log('hostedFieldsErr:');
          console.log(hostedFieldsErr);
        }

        submit.removeAttribute('disabled');

        form.addEventListener('submit', (event) => {
          event.preventDefault();

          hostedFieldsInstance.tokenize((tokenizeErr, payload) => {
            if (tokenizeErr) {
              console.log('tokenizeErr:');
              console.log(tokenizeErr);
            }
            this.setState({
              nonce: payload.nonce,
            });

        // Put `payload.nonce` into the `payment-method-nonce` input, and then
        // submit the form. Alternatively, you could send the nonce to your server
        // with AJAX.
            // document.querySelector('input[name="payment-method-nonce"]').value = payload.nonce;
            // form.submit();
          });
        }, false);
      });
    });
  }

  onPaymentSubmit() {
    if (this.state.nonce !== null && typeof this.props.spot !== 'undefined') {
      this.props.sendPayment(this.state.nonce, this.props.spot.price);
      this.props.buySpot(this.props.spot._id);
      this.props.createConversation(this.props.spot.vendor);
    }
  }

  render() {
    return (
      <div>
        <form id="checkout-form" action="/transaction-endpoint" method="post" onSubmit={this.onPaymentSubmit}>
          <div id="error-message"></div>

          <label htmlFor="card-number">Card Number</label>
          <div className="hosted-field" id="card-number"></div>

          <label htmlFor="cvv">CVV</label>
          <div className="hosted-field" id="cvv"></div>

          <label htmlFor="expiration-month">Expiration Month</label>
          <div className="hosted-field" id="expiration-month"></div>

          <label htmlFor="expiration-year">Expiration Year</label>
          <div className="hosted-field" id="expiration-year"></div>

          <input type="hidden" name="payment-method-nonce" />
          <input type="submit" value="Pay" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paymentToken: state.paymentToken,
    spot: state.spots.spot,
  };
};

export default connect(mapStateToProps, { getAuthorization, sendPayment, buySpot, createConversation })(BuyItem);
