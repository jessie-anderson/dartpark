import axios from 'axios';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_CONVO_PREVIEW: 'FETCH_CONVO_PREVIEW',
  FETCH_CONVO: 'FETCH_CONVO',
};

const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'http://dartpark.herokuapp.com/api';


export function fetchConvoPreview(userType) {
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/conversations/requester/${userType}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
    axios.get(`${ROOT_URL}/conversations/${convoId}/requester/${localStorage.getItem('userRole')}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      // do something with response.data  (some json)
      // console.log('fetchConvo');
      console.log(response.data.conversations);
      dispatch({ type: 'FETCH_CONVO', payload: { conversation: response.data.conversations[0] } });
    }).catch(error => {
      // hit an error
    });
  };
}

export function popConvoToTop(convoId) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/conversations/${convoId}/requester/${localStorage.getItem('userRole')}`, {}, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch(response);
    }).catch(error => {
        // hit an error
    });
  };
}
export function sendMessage(convoId, { message }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/conversations/${convoId}/requester/${localStorage.getItem('userRole')}`, { message }, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      fetchConvo(convoId)(dispatch);
      popConvoToTop(convoId)((res) => {
        fetchConvoPreview(localStorage.getItem('userRole'))(dispatch);
      });
    }).catch(error => {
        // hit an error
    });
  };
}

export function createConversation(vendorId) {
  return (dispatch) => {
    console.log(vendorId);
    axios.put(`${ROOT_URL}/conversations`, { vendorId }, { headers: { authorizationrenter: localStorage.getItem('token') } }).then(response => {
      browserHistory.push('/messaging');
      // fetchConvoPreview('renter')(dispatch);
    }).catch(error => {
        // hit an error
    });
  };
}
