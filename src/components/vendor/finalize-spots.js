import React, { Component } from 'react';
import SpotItem from '../renter/spot-list-item';
import { Link } from 'react-router';

class FinalizeSpots extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.getAllSpots = this.getAllSpots.bind(this);
  }

  getAllSpots() {

  }

  render() {
    return (
      <div>
        <h1>Review Created Spots</h1>
        {this.getAllSpots()}
        <SpotItem />
        <Link to="/vendor/manage"><button>Done</button></Link>
      </div>
    );
  }
}
export default FinalizeSpots;
