// detail of spot that renders when renter searches for spots
// TODO: connect "buy" button to component that implements paying API

import React, { Component } from 'react';
import { renterGetSpot } from '../../actions/spot-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.getSpotDetail = this.getSpotDetail.bind(this);
  }

  getSpotDetail() {
    this.props.renterGetSpot(this.props._id);
  }

  render() {
    console.log(this.props.address);
    return (
      <div id="general-style">
        <div id="buySpotDisp">
          <h1>Address: {this.props.address}</h1>
          <div>Distance: {this.props.distance}</div>
          <div>Vendor: {this.props.vendor}</div>
          <div>Price: {this.props.price}</div>
          <div>Start date: {this.props.startDate}</div>
          <div>End date: {this.props.endDate}</div>
          <div id="spot-img"><img src={'http://greport.gru.edu/wp-content/uploads/2013/12/parkingspot.jpg'} alt="parking-spot-img" /></div>
          <Link to="/renter/buy-spot">
            <button onClick={this.getSpotDetail}>Buy Spot</button>
          </Link>
        </div>

      </div>
    );
  }
}

export default connect(null, { renterGetSpot })(ResultItem);
