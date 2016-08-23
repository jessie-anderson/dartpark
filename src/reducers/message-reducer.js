import { ActionTypes } from '../actions/message-actions';


const MessageReducer = (state = { all: [], conversation: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONVO_PREVIEW:
      return { ...state, all: action.payload.conversations };
    case ActionTypes.FETCH_CONVO:
      console.log(action.payload.conversation);
      return { ...state, conversation: action.payload.conversation };
    default:
      return state;
  }
};

export default MessageReducer;
