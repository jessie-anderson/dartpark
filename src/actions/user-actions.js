import * as axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:9090/api'; // for testing
// const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server

export const UserActionTypes = {
  RENTER_CHANGE_PASSWORD: 'RENTER_CHANGE_PASSWORD',
  RENTER_CHANGE_BIO_AND_NAME: 'RENTER_CHANGE_BIO_AND_NAME',
  VENDOR_CHANGE_PASSWORD: 'VENDOR_CHANGE_PASSWORD',
  VENDOR_CHANGE_BIO_AND_NAME: 'VENDOR_CHANGE_BIO_AND_NAME',
  RENTER_GET_SPOTS_AND_CARS: 'RENTER_GET_SPOTS_AND_CARS',
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
      localStorage.setItem('userRole', 'renter');
      localStorage.setItem('user', response.data.renter);
      if (typeof response.data.token !== 'undefined') browserHistory.push('/renter');
      else browserHistory.push('/'); // signin failed
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
      localStorage.setItem('userRole', 'vendor');
      localStorage.setItem('user', response.data.vendor);
      if (typeof response.data.token !== 'undefined') browserHistory.push('/vendor/manage');
      else browserHistory.push('/'); // signin failed
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
      console.log(response.data.renter);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', 'renter');
      localStorage.setItem('userBio', response.data.renter.bio);
      localStorage.setItem('userName', response.data.renter.username);
      if (typeof response.data.token !== 'undefined') browserHistory.push('/renter');
      else browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign Up Failed: ${err}`));
    });
  };
}

export function signupVendor({ email, password, username }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/vendor/signup`, { email, password, username })
    .then(response => {
      dispatch({
        type: UserActionTypes.AUTH_VENDOR,
        payload: response.data.vendor,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', 'vendor');
      if (typeof response.data.token !== 'undefined') browserHistory.push('/vendor/manage');
      else browserHistory.push('/');
    })
    .catch(err => {
      dispatch(authError(`Sign Up Failed: ${err.response.data}`));
    });
  };
}

export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('user');
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

export function changeVendorBioAndName(bio, username) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/vendor/updateBioAndName`,
    { bio, username }, { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.VENDOR_CHANGE_BIO_AND_NAME,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function changeRenterBioAndName(bio, username) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/renter/updateBioAndName`,
    { bio, username }, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.RENTER_CHANGE_BIO_AND_NAME,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function renterGetSpotsAndCars(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/carsAndSpots`, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: UserActionTypes.RENTER_GET_SPOTS_AND_CARS,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}
