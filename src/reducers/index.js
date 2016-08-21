import { combineReducers } from 'redux';

import CarReducer from './car-reducer';
import SpotsReducer from './spots-reducer';
import UserReducer from './user-reducer';

const appReducer = combineReducers({
  auth: UserReducer,
  spots: SpotsReducer,
  cars: CarReducer,
});

export default appReducer;
