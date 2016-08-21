import { CarActionTypes } from '../actions/car-actions.js';

const CarReducer = (cars = { all: [], car: null }, action) => {
  switch (action.type) {
    case CarActionTypes.CREATE_CAR:
      return {
        all: action.payload.renter.cars,
        car: action.payload.car,
      };
    case CarActionTypes.CAR_CREATE_ERR:
      return cars;
    case CarActionTypes.UPDATE_CAR:
      return {
        all: action.payload.renter.cars,
        car: action.payload.car,
      };
    case CarActionTypes.CAR_UPDATE_ERR:
      return cars;
    case CarActionTypes.DELETE_CAR:
      return {
        all: action.payload.cars,
        car: null,
      };
    case CarActionTypes.CAR_DELETE_ERR:
      return cars;
    case CarActionTypes.GET_CAR:
      return {
        all: cars.all,
        car: action.payload,
      };
    case CarActionTypes.CAR_GET_ERR:
      return cars;
    case CarActionTypes.GET_CARS:
      return {
        all: action.payload,
        car: cars.car,
      };
    case CarActionTypes.CARS_GET_ERR:
      return cars;
    default: return cars;
  }
};

export default CarReducer;
