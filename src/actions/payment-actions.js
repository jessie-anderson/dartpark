import axios from 'axios';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server
import { browserHistory } from 'react-router';

export const PaymentActionTypes = {
  GET_TOKEN: 'GET_TOKEN',
};

export function getAuthorization() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/renter/payment`, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      console.log(response.data.token);
      dispatch({
        type: PaymentActionTypes.GET_TOKEN,
        payload: response.data.token,
      });
    })
    .catch(err => {
      console.log(err);
    });
  };
}

export function sendPayment(nonce, amount) {
  return (dispatch) => {
    console.log(amount);
    axios.post(`${ROOT_URL}/renter/payment`,
               { payment_method_nonce: nonce, amount },
               { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(resopnse => {
      browserHistory.push('/renter');
    })
    .catch(err => {
      console.log(err);
    });
  };
}
