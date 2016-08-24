import { SpotActionTypes } from '../actions/spot-actions';

const SpotsReducer = (spots = { all: [], temp: [], spot: null }, action) => {
  switch (action.type) {
    // case SpotActionTypes.SEARCH_LOCATION:
      // return Object.assign({}, );
    case SpotActionTypes.CREATE_SPOT:
      console.log(action.payload);
      return Object.assign({}, spots, { temp: [], all: action.payload.spots });
    case SpotActionTypes.CREATE_TEMP_SPOTS:
      return Object.assign({}, spots, { temp: action.payload });
    case SpotActionTypes.VENDOR_GET_SPOTS:
      console.log(action.payload);
      return Object.assign({}, spots, { all: action.payload });
    case SpotActionTypes.UPDATE_SPOT:
      console.log(action.payload);
      return {
        all: action.payload.vendor.spots,
        spot: action.payload.spot,
      };
    case SpotActionTypes.VENDOR_DELETE_SPOT:
      return {
        all: action.payload.spots,
        spot: null,
      };
    case SpotActionTypes.VENDOR_GET_SPOT:
      return Object.assign({}, spots, { spot: action.payload });
    case SpotActionTypes.RENTER_GET_SPOTS:
      return Object.assign({}, spots, { spots: action.payload });
    case SpotActionTypes.RENTER_GET_SPOT:
      return Object.assign({}, spots, { spot: action.payload });
    case SpotActionTypes.RENTER_DELETE_SPOT:
      return {
        all: action.payload.spots,
        spot: null,
      };
    case SpotActionTypes.BUY_SPOT:
      return {
        all: action.payload.renter.spots,
        spot: action.payload.spot,
      };
    default: return spots;
  }
};

export default SpotsReducer;
