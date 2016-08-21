import { UserActionTypes } from '../actions/user-actions';
import { CarActionTypes } from '../actions/car-actions';
import { SpotActionTypes } from '../actions/spot-actions';

const UserReducer = (auth = { user: null, userType: null, authenticated: false }, action) => {
  switch (action.type) {
    case UserActionTypes.AUTH_VENDOR:
      console.log(action.payload);
      return {
        authenticated: true,
        user: action.payload,
        userType: 'vendor',
      };
    case UserActionTypes.AUTH_RENTER:
      console.log(action.payload);
      return {
        authenticated: true,
        user: action.payload,
        userType: 'renter',
      };
    case UserActionTypes.DEAUTH_USER:
      return {
        authenticated: false,
        user: null,
        userType: null,
      };
    case UserActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
        user: null,
        userType: null,
      };
    case UserActionTypes.VENDOR_CHANGE_BIO:
      return Object.assign({}, auth, { user: action.payload });
    case UserActionTypes.RENTER_CHANGE_BIO:
      return Object.assign({}, auth, { user: action.payload });
    case UserActionTypes.VENDOR_CHANGE_PASSWORD:
      return Object.assign({}, auth, { user: action.payload });
    case UserActionTypes.RENTER_CHANGE_PASSWORD:
      return Object.assign({}, auth, { user: action.payload });
    case CarActionTypes.CREATE_CAR:
      return Object.assign({}, auth, { user: action.payload.renter });
    case CarActionTypes.DELETE_CAR:
      return Object.assign({}, auth, { user: action.payload });
    case CarActionTypes.UPDATE_CAR:
      return Object.assign({}, auth, { user: action.payload.renter });
    case SpotActionTypes.CREATE_SPOT:
      return Object.assign({}, auth, { user: action.payload.vendor });
    case SpotActionTypes.UPDATE_SPOT:
      return Object.assign({}, auth, { user: action.payload.vendor });
    case SpotActionTypes.VENDOR_DELETE_SPOT:
      return Object.assign({}, auth, { user: action.payload.vendor });
    case SpotActionTypes.RENTER_DELETE_SPOT:
      return Object.assign({}, auth, { user: action.payload });
    case SpotActionTypes.BUY_SPOT:
      return Object.assign({}, auth, { user: action.payload.renter });
    default: return auth;
  }
};

export default UserReducer;
