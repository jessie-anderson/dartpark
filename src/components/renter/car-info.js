import React, { Component } from 'react';

class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: '',
      color: '',
      license: '',
    };
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeLicense = this.onChangeLicense.bind(this);
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
    this.setState({ color: event.target.value });
  }
  onChangeLicense(event) {
    this.setState({ license: event.target.value });
  }

  render() {
    return (
      <div className="newPost">
        <div className="heading">
          <span>Profile</span>
        </div>
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
          <input value={this.state.color} onChange={this.onChangeColor} placeholder="Color" />
        </div>
        <div className="inputs">
          <input value={this.state.license} onChange={this.onChangeLicense} placeholder="License Plate Number" />
        </div>
        <div className="button">
          <button id="edit-info">Edit My Info</button>
        </div>
      </div>
    );
  }
    }

export default CarInfo;
