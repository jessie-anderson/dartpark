import axios from 'axios';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_CONVOS: 'FETCH_CONVOS',
};

const ROOT_URL = 'http://localhost:9090/api';


export function fetchConvos(userId, userType) {
  return (dispatch) => {
      // can now dispatch stuff
    axios.get(`${ROOT_URL}/conversations/${userId}/requester/${userType}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data.conversations);
      dispatch({ type: 'FETCH_CONVOS', payload: response.data.conversations });
    }).catch(error => {
        // hit an error
    });
  };
}

export function fetchConvo(userId, userType) {

}
