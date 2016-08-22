import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrap } from 'react-bootstrap';
import { Link } from 'react-router';
import SimpleSearchBar from '../renter/simple-bar';
import { createSpot } from '../../actions/spot-actions';

class CreateSpots extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      numberOfSpots: '',
      spotOrdering: '',
      pricePerSpot: '',
      spotAddress: '',
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
    console.log('button pressed');
  }


  render() {
    return (
      <div>
        <h1>Create Spot(s)</h1>

        <label htmlFor="numSpots">Number of Spots: </label>
        <input placeholder="Insert a Number 0-100..." id="numSpots" ></input>

        <label htmlFor="namingOption">How would you like to name your spots? </label>
        <select onChange={this.onSpotOrderingChange} id="namingOption">
          <option value="num">Spot 1, Spot 2, Spot 3, etc...</option>
          <option value="letter">Spot A, Spot B, Spot C, etc...</option>
        </select>

        <label htmlFor="spotLocation">Spot Address: </label>
        // <input id="spotLocation" placeholder="Enter Address..."></input>
        <SimpleSearchBar />


        <label htmlFor="spotPrice">Spot Price: </label>
        <input placeholder="Price in dollars (Ex. $x.xx)..." id="numSpots" ></input>


        <p>Note: Dont worry, you can edit all this information further on the next page.</p>
        <Link to="/vendor/finalize-spots" ><button onClick={this.onButtonPress}>Create Spots</button></Link>
      </div>
    );
  }
}
export default CreateSpots;
