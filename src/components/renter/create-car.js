// component that allows user to create a car

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCar } from '../../actions/car-actions';

class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onPaintcolorChange = this.onPaintcolorChange.bind(this);
    this.onPlateNumberChange = this.onPlateNumberChange.bind(this);
    this.state = {
      make: '',
      model: '',
      year: '',
      paintcolor: '',
      plateNumber: '',
    };
  }
  onSave() {
    const car = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      paintcolor: this.state.paintcolor,
      plateNumber: this.state.plateNumber,
    };
    this.props.createCar(car);
  }
  onMakeChange(event) {
    this.setState({ make: event.target.value });
  }
  onModelChange(event) {
    this.setState({ model: event.target.value });
  }
  onYearChange(event) {
    this.setState({ year: event.target.value });
  }
  onPaintcolorChange(event) {
    this.setState({ paintcolor: event.target.value });
  }
  onPlateNumberChange(event) {
    this.setState({ plateNumber: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="make">Make:</label>
        <input id="make" onChange={this.onMakeChange} value={this.state.make} />

        <label htmlFor="model">Model:</label>
        <input id="model" onChange={this.onModelChange} value={this.state.model} />

        <label htmlFor="year">Year:</label>
        <input id="year" onChange={this.onYearChange} value={this.state.year} />

        <label htmlFor="color">Color:</label>
        <input id="color" onChange={this.onPaintcolorChange} value={this.state.paintcolor} />

        <label htmlFor="plate">Plate number:</label>
        <input id="plate" onChange={this.onPlateNumberChange} value={this.state.plateNumber} />

        <button onClick={this.onSave}>Save Car</button>
      </div>
    );
  }
}

export default connect(null, { createCar })(CreateCar);
