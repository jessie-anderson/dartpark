import { ActionTypes } from '../actions/message-actions';


const MessageReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONVOS:
      return action.payload;
    default:
      return state;
  }
};

export default MessageReducer;
