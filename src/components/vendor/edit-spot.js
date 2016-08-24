import React, { Component } from 'react';
// import { bootstrap } from 'react-bootstrap';
import SpotItem from './spot-list-item';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updateSpot } from '../../actions/spot-actions';

class EditSpot extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      pricePerSpot: '',
      spotAddress: '',
      spotName: '',
      vendorName: '',
      spotPrice: '',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onNumSpotsChange = this.onNumSpotsChange.bind(this);
    this.onSpotOrderingChange = this.onSpotOrderingChange.bind(this);
  }


  onAddressChange(event) {
    this.setState({ spotAddress: event.target.value });
  }

  onPriceChange(event) {
    this.setState({ pricePerSpot: event.target.value });
  }

  onNumSpotsChange(event) {
    this.setState({ numberOfSpots: event.target.value });
  }

  onSpotOrderingChange(event) {
    this.setState({ spotOrdering: event.target.value });
  }

  onButtonPress(event) {
    this.props.updateSpot(this.state);
  }


  render() {
    return (
      <div>
        <h1>Edit Spot</h1>
        <label htmlFor="spotLocation">Spot Address: </label>
        <input id="spotLocation" placeholder={this.spotAddress}></input>

        <label htmlFor="spotPrice">Spot Price: </label>
        <input placeholder={this.spotPrice} id="numSpots" ></input>
        <SpotItem />

        <Link to="/vendor/manage"><button onClick={this.onButtonPress}>Save Spot</button></Link>
      </div>
    );
  }
}
export default connect(null, { updateSpot })(EditSpot);
