// component with all car info that renders when renter clicks on "edit" button
// for car on profile page. Allows renter to edit and delete car

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCar, deleteCar } from '../../actions/car-actions';

class ViewCar extends Component {
  constructor(props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onPlateChange = this.onPlateChange.bind(this);

    this.state = {
      isEditing: false,
      car: this.props.car,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ car: props.car });
  }

  onSaveClick() {
    /*
    let make, model, year, paintcolor, plateNumber;
    if (this.state.car === null) {
      make = this.props.car.make;
      model = this.props.car.model;
      year = this.props.car.year;
      paintcolor = this.props.car.paintcolor;
      plateNumber = this.props.car.plateNumber;
    } else {
      if (typeof this.state.car.make === 'undefined' || this.state.car.make === null) {
        make = this.props.car.make;
      } else {
        make = this.state.car.make;
      }

      if (typeof this.state.car.model === 'undefined' || this.state.car.model === null) {
        model = this.props.car.model;
      } else {
        model = this.state.car.model;
      }

      if (typeof this.state.car.year === 'undefined' || this.state.car.year === null) {
        year = this.props.car.year;
      } else {
        year = this.state.car.year;
      }

      if (typeof this.state.car.paintcolor === 'undefined' || this.state.car.paintcolor === null) {
        paintcolor = this.props.car.paintcolor;
      } else {
        paintcolor = this.state.car.paintcolor;
      }

      if (typeof this.state.car.plateNumber === 'undefined' || this.state.car.plateNumber === null) {
        plateNumber = this.props.car.plateNumber;
      } else {
        plateNumber = this.state.car.plateNumber;
      }
    }
    */
    const car = {
      make: this.state.car.make,
      model: this.state.car.model,
      year: this.state.car.year,
      paintcolor: this.state.car.paintcolor,
      plateNumber: this.state.car.plateNumber,
    };
    this.props.updateCar(car, this.props.car._id);
  }

  onEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onDelete() {
    this.props.deleteCar(this.props.car._id);
  }

  onMakeChange(event) {
    const car = Object.assign({}, this.state.car, { make: event.target.value });
    this.setState({ car });
  }

  onModelChange(event) {
    const car = Object.assign({}, this.state.car, { model: event.target.value });
    this.setState({ car });
  }

  onYearChange(event) {
    const car = Object.assign({}, this.state.car, { year: event.target.value });
    this.setState({ car });
  }

  onColorChange(event) {
    const car = Object.assign({}, this.state.car, { paintcolor: event.target.value });
    this.setState({ car });
  }

  onPlateChange(event) {
    const car = Object.assign({}, this.state.car, { plateNumber: event.target.value });
    this.setState({ car });
  }

  render() {
    if (typeof this.props.car === 'undefined' || this.props.car === null) {
      return (
        <div>Retrieving Car Info...</div>
      );
    } else if (!this.state.isEditing) {
      return (
        <div id="center-content">
          <div id="editCarItem">
            <p>Make: {this.props.car.make}</p>
            <p>Model: {this.props.car.model}</p>
            <p>Year: {this.props.car.year}</p>
            <p>Color: {this.props.car.paintcolor}</p>
            <p>Plate: {this.props.car.plateNumber}</p>
            <button id="std-btn" onClick={this.onEdit}>Edit</button>
            <button id="std-btn" onClick={this.onDelete}>Delete Car</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="center-content">
            <label htmlFor="make">Make:</label>
            <input id="make" value={this.state.car.make} onChange={this.onMakeChange} />

            <label htmlFor="model">Model:</label>
            <input id="model" value={this.state.car.model} onChange={this.onModelChange} />

            <label htmlFor="year">Year:</label>
            <input id="year" value={this.state.car.year} onChange={this.onYearChange} />

            <label htmlFor="color">Color:</label>
            <input id="color" value={this.state.car.paintcolor} onChange={this.onColorChange} />

            <label htmlFor="plate">Plate:</label>
            <input id="plate" value={this.state.car.plateNumber} onChange={this.onPlateChange} />

            <button id="std-btn" onClick={this.onSaveClick}>Save Changes</button>
            <button id="std-btn" onClick={this.onEdit}>Cancel</button>
            <button id="std-btn" onClick={this.onDelete}>Delete Car</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    car: state.cars.car,
  };
};

export default connect(mapStateToProps, { updateCar, deleteCar })(ViewCar);
