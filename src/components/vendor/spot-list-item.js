import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrap } from 'react-bootstrap';

class SpotItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      spotAddress: '',
      spotName: '',
      vendorName: '',
      spotPrice: '',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.spotName}</p>
        <button >Edit</button>
        <p>{'Address: ' + this.state.spotAddress}</p>
        <p>{'Price: ' + this.state.spotPrice}</p>
        <p>{'Vendor : ' + this.state.vendorName}</p>
        <button >Upload Photo</button>

      </div>
    );
  }
}
export default SpotItem;
