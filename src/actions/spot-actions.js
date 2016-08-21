import * as axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:9090/api'; // for testing
// const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server

const SpotActionTypes = {
  CREATE_SPOT: 'CREATE_SPOT',
  VENDOR_GET_SPOTS: 'VENDOR_GET_SPOTS',
  VENDOR_GET_SPOT: 'VENDOR_GET_SPOT',
  UPDATE_SPOT: 'UPDATE_SPOT',
  VENDOR_DELETE_SPOT: 'VENDOR_DELETE_SPOT',
  RENTER_GET_SPOTS: 'RENTER_GET_SPOTS',
  RENTER_GET_SPOT: 'RENTER_GET_SPOT',
  RENTER_DELETE_SPOT: 'RENTER_DELETE_SPOT',
  BUY_SPOT: 'BUY_SPOT',
};

export function createSpot(spot) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/vendor/spots`, {
      address: spot.address,
      price: spot.price,
      startDate: spot.startDate,
      endDate: spot.endDate,
      number: spot.number,
    }, { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.CREATE_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function vendorGetSpots() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/vendor/spots`,
    { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.VENDOR_GET_SPOTS,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function vendorGetSpot(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/vendor/spots/${id}`,
    { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.VENDOR_GET_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function updateSpot(spot, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/vendor/spots/${id}`, {
      address: spot.address,
      price: spot.price,
      startDate: spot.startDate,
      endDate: spot.endDate,
      number: spot.number,
    }, { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.UPDATE_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function vendorDeleteSpot(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/vendor/spots/${id}`,
    { headers: { authorizationvendor: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.VENDOR_DELETE_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function renterGetSpots() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/renter/spots`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.RENTER_GET_SPOTS,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function renterGetSpot(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/renter/spots/${id}`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.RENTER_GET_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function renterDeleteSpot(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/renter/spots/${id}`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.RENTER_DELETE_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}

export function buySpot(id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/buySpot/${id}`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: SpotActionTypes.BUY_SPOT,
        payload: response.data,
      });
    })
    .catch(err => {});
  };
}
