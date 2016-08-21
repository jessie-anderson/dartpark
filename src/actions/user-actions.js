import * as axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:9090/api'; // for testing
// const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server

export const UserActionTypes = {
  RENTER_CHANGE_PASSWORD: 'RENTER_CHANGE_PASSWORD',
  RENTER_CHANGE_BIO: 'RENTER_CHANGE_BIO',
  VENDOR_CHANGE_PASSWORD: 'VENDOR_CHANGE_PASSWORD',
  VENDOR_CHANGE_BIO: 'VENDOR_CHANGE_BIO',
  AUTH_VENDOR: 'AUTH_VENDOR',
  AUTH_RENTER: 'AUTH_RENTER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

function authError(error) {
  return {
    type: UserActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinRenter({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/renter/signin`, { email, password })
    .then(response => {
      dispatch({
        type: UserActionTypes.AUTH_RENTER,
        payload: response.data.renter,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign In Failed: ${err.response.data}`));
    });
  };
}

export function signinVendor({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/vendor/signin`, { email, password })
    .then(response => {
      dispatch({
        type: UserActionTypes.AUTH_VENDOR,
        payload: response.data.vendor,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign In Failed: ${err.response.data}`));
    });
  };
}

export function signupRenter({ email, password, username }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/renter/signup`, { email, password, username })
    .then(response => {
      dispatch({
        type: UserActionTypes.AUTH_RENTER,
        payload: response.data.renter,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign Up Failed: ${err.response.data}`));
    });
  };
}

export function signupVendor({ email, password, username }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/renter/signup`, { email, password, username })
    .then(response => {
      dispatch({
        type: UserActionTypes.AUTH_RENTER,
        payload: response.data.vendor,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign Up Failed: ${err.response.data}`));
    });
  };
}

export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: UserActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

export function changeVendorPassword(password) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/vendor/changePassword`,
    { password, headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.VENDOR_CHANGE_PASSWORD,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function changeRenterPassword(password) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/renter/changePassword`,
    { password }, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.RENTER_CHANGE_PASSWORD,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function changeVendorBio(bio) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/vendor/updateBio`,
    { bio }, { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.VENDOR_CHANGE_BIO,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function changeRenterBio(bio) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/renter/updateBio`,
    { bio }, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.RENTER_CHANGE_BIO,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}
