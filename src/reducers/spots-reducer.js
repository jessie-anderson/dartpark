import { SpotActionTypes } from '../actions/spot-actions';
import { UserActionTypes } from '../actions/user-actions';

const SpotsReducer = (spots = { all: [], spot: null, searchTerm: '' }, action) => {
  switch (action.type) {
    case SpotActionTypes.SEARCH_LOCATION:
      return Object.assign({}, spots, { searchTerm: action.payload });
    case SpotActionTypes.CREATE_SPOT:
      console.log(action.payload);
      return Object.assign({}, spots, { all: action.payload.spots, spot: action.payload.spot });
    case SpotActionTypes.VENDOR_GET_SPOTS:
      console.log(action.payload);
      return Object.assign({}, spots, { all: action.payload });
    case SpotActionTypes.UPDATE_SPOT:
      console.log(action.payload);
      console.log(action.payload.spot);
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
      console.log(action.payload);
      return Object.assign({}, spots, { all: action.payload });
    case SpotActionTypes.RENTER_GET_SPOT:
      return Object.assign({}, spots, { spot: action.payload });
    case SpotActionTypes.RENTER_DELETE_SPOT:
      return {
        all: action.payload.spots,
        spot: null,
      };
    case SpotActionTypes.BUY_SPOT:
      console.log(action.payload);
      return {
        all: action.payload.renter.spots,
        spot: action.payload.spot,
        searchTerm: spots.searchTerm,
      };
    case SpotActionTypes.GET_ALL_SPOTS:
      return Object.assign({}, spots, { all: action.payload });
    case UserActionTypes.RENTER_GET_SPOTS_AND_CARS:
      return Object.assign({}, spots, { all: action.payload.spots });
    default: return spots;
  }
};

export default SpotsReducer;
