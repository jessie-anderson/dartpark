import { PictureActionTypes } from '../actions/picture-actions';

const PictureReducer = (state = { url: null }, action) => {
  switch (action.type) {
    case PictureActionTypes.GET_PICTURE_URL:
      return { ...state, uploadUrl: action.payload.url };
    default:
      return state;
  }
};


export default PictureReducer;
