import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrap } from 'react-bootstrap';
import SimpleSearchBar from '../renter/simple-bar';
import { createSpot } from '../../actions/spot-actions';

class CreateSpots extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      price: '',
      spotAddress: '',
      startDate: '',
      endDate: '',
      spotName: '',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onSpotNameChange = this.onSpotNameChange.bind(this);
  }


  onAddressChange(event) {
    this.setState({ spotAddress: event.target.value });
  }

  onPriceChange(event) {
    this.setState({ price: event.target.value });
  }

  onStartDateChange(event) {
    this.setState({ startDate: event.target.value });
  }

  onEndDateChange(event) {
    this.setState({ endDate: event.target.value });
  }

  onSpotNameChange(event) {
    this.setState({ spotName: event.target.value });
  }

  onButtonPress(event) {
    this.props.createSpot(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create Spot(s)</h1>

        <label htmlFor="spotName">Spot Address: </label>
        <input onChange={this.onSpotNameChange} id="spotName" placeholder="Enter Name..."></input>

        <label htmlFor="spotLocation">Spot Address: </label>
        <input onChange={this.onAddressChange} id="spotLocation" placeholder="Enter Address..."></input>
        <SimpleSearchBar />


        <label htmlFor="spotPrice">Spot Price: </label>
        <input onChange={this.onPriceChange} placeholder="Price in dollars (Ex. $x.xx)..." id="numSpots" ></input>

        <label htmlFor="startDate">Start Date: </label>
        <input onChange={this.onStartDateChange} placeholder="Start date..." id="startDate" ></input>

        <label htmlFor="endDate">End Date: </label>
        <input onChange={this.onEndDateChange} placeholder="End date..." id="endDate" ></input>

        <button onClick={this.onButtonPress}>Create Spot</button>
      </div>
    );
  }
}
export default connect(null, { createSpot })(CreateSpots);
