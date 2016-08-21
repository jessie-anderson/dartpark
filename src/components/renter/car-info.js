import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCar } from '../actions/car-actions';


class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: '',
      paintcolor: '',
      plateNumber: '',
    };
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeLicense = this.onChangeLicense.bind(this);
    this.onSubmitPress = this.onSubmitPress.bind(this);
  }

  onChangeMake(event) {
    this.setState({ make: event.target.value });
  }

  onChangeModel(event) {
    this.setState({ model: event.target.value });
  }

  onChangeYear(event) {
    this.setState({ year: event.target.value });
  }

  onChangeColor(event) {
    this.setState({ paintcolor: event.target.value });
  }
  onChangeLicense(event) {
    this.setState({ plateNumber: event.target.value });
  }
  onSubmitPress(event) {
    this.props.createCar(this.state);
  }

  render() {
    return (
      <div className="newPost">
        <div className="inputs">
          <input value={this.state.make} onChange={this.onChangeMake} placeholder="Make" />
        </div>
        <div className="inputs">
          <input value={this.state.model} onChange={this.onChangeModel} placeholder="Model" />
        </div>
        <div className="inputs">
          <input value={this.state.year} onChange={this.onChangeYear} placeholder="Year" />
        </div>
        <div className="inputs">
          <input value={this.state.paintcolor} onChange={this.onChangeColor} placeholder="Color" />
        </div>
        <div className="inputs">
          <input value={this.state.plateNumber} onChange={this.onChangeLicense} placeholder="License Plate Number" />
        </div>
        <div className="button">
          <button id="edit-info" onClick={this.onSubmitPress}>Edit Vehicle Info</button>
        </div>
      </div>
    );
  }
    }

export default connect(null, { createCar })(CarInfo);
