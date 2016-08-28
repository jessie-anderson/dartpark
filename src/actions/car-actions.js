import * as axios from 'axios';
import { browserHistory } from 'react-router';
// const ROOT_URL = 'http://localhost:9090/api'; // for testing
const ROOT_URL = 'http://dartpark.herokuapp.com/api'; // for when it's connected to the server

export const CarActionTypes = {
  CREATE_CAR: 'CREATE_CAR',
  CAR_CREATE_ERR: 'CAR_CREATE_ERR',
  UPDATE_CAR: 'UPDATE_CAR',
  CAR_UPDATE_ERR: 'CAR_UPDATE_ERR',
  DELETE_CAR: 'DELETE_CAR',
  CAR_DELETE_ERR: 'CAR_DELETE_ERR',
  GET_CAR: 'GET_CAR',
  CAR_GET_ERR: 'CAR_GET_ERR',
  GET_CARS: 'GET_CARS',
  CARS_GET_ERR: 'CARS_GET_ERR',
};

export function createCar(car) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/cars`, {
      make: car.make,
      model: car.model,
      year: car.year,
      paintcolor: car.paintcolor,
      plateNumber: car.plateNumber,
    }, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: CarActionTypes.CREATE_CAR,
        payload: response.data,
      });
      browserHistory.push('/renter');
    })
    .catch(err => {
      dispatch({
        type: CarActionTypes.CAR_CREATE_ERR,
      });
    });
  };
}

export function updateCar(car, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/cars/${id}`, {
      make: car.make,
      model: car.model,
      year: car.year,
      paintcolor: car.paintcolor,
      plateNumber: car.plateNumber,
    }, { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: CarActionTypes.UPDATE_CAR,
        payload: response.data,
      });
      browserHistory.push('/renter');
    })
    .catch(err => {
      dispatch({
        type: CarActionTypes.CAR_UPDATE_ERR,
      });
    });
  };
}

export function deleteCar(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/cars/${id}`,
      { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: CarActionTypes.DELETE_CAR,
        payload: response.data,
      });
      browserHistory.push('/renter');
    })
    .catch(err => {
      dispatch({
        type: CarActionTypes.CAR_DELETE_ERR,
      });
    });
  };
}

export function getCar(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/cars/${id}`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: CarActionTypes.GET_CAR,
        payload: response.data,
      });
    })
    .catch(err => {
      dispatch({
        type: CarActionTypes.CAR_GET_ERR,
      });
    });
  };
}

export function getCars() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/cars`,
    { headers: { authorizationrenter: localStorage.getItem('token') } })
    .then(response => {
      dispatch({
        type: CarActionTypes.GET_CARS,
        payload: response.data,
      });
    })
    .catch(err => {
      dispatch({
        type: CarActionTypes.CARS_GET_ERR,
      });
    });
  };
}
