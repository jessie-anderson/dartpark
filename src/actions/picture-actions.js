import * as axios from 'axios';
import { browserHistory } from 'react-router';
// const ROOT_URL = 'http://localhost:9090/api'; // for testing
const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server

export const PictureActionTypes = {
  GET_PICTURE_URL: 'GET_PICTURE_URL',
};

export function sendUserPictureName(title, user) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/pictures/upload/user`, { imageName: title }, { userType: user }, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'GET_PICTURE_URL', payload: response.data.secure_url });
    }).catch(error => {
        // hit an error
    });
  };
}


export function sendSpotPictureName(title, spotID) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/pictures/upload/spot/${spotID}`, { imageName: title }, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'GET_PICTURE_URL', payload: response.data.secure_url });
    }).catch(error => {
        // hit an error
    });
  };
}

export function sendCarPictureName(title, carID) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/pictures/upload/car/${carID}`, { imageName: title }, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'GET_PICTURE_URL', payload: response.data.secure_url });
    }).catch(error => {
        // hit an error
    });
  };
}
