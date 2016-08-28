import { PaymentActionTypes } from '../actions/payment-actions';

const PaymentReducer = (paymentToken = null, action) => {
  switch (action.type) {
    case PaymentActionTypes.GET_TOKEN:
      console.log(action.payload);
      return action.payload;
    default: return null;
  }
};

export default PaymentReducer;
