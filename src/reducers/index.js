import { combineReducers } from 'redux';

import CarReducer from './car-reducer';
import SpotsReducer from './spots-reducer';
import UserReducer from './user-reducer';
import MessageReducer from './message-reducer';
import PaymentReducer from './payment-reducer';

const appReducer = combineReducers({
  auth: UserReducer,
  spots: SpotsReducer,
  cars: CarReducer,
  conversations: MessageReducer,
  paymentToken: PaymentReducer,
});

export default appReducer;
