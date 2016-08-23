import axios from 'axios';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_CONVO_PREVIEW: 'FETCH_CONVO_PREVIEW',
  FETCH_CONVO: 'FETCH_CONVO',
};

const ROOT_URL = 'http://localhost:9090/api';


export function fetchConvoPreview(userId, userType) {
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/conversations/${userId}/requester/${userType}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(`response.data.conversations: ${response.data.conversations}`);
      dispatch({ type: 'FETCH_CONVO_PREVIEW', payload: { conversations: response.data.conversations } });
    }).catch(error => {
        // hit an error
    });
  };
}

export function fetchConvo(convoId) {
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/conversations/${convoId}`).then(response => {
      // do something with response.data  (some json)
      // console.log('fetchConvo');
      console.log(response.data.conversations);
      dispatch({ type: 'FETCH_CONVO', payload: { conversation: response.data.conversations[0] } });
    }).catch(error => {
      // hit an error
    });
  };
}
