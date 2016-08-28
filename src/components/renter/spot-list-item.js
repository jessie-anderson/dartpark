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
    this.onBuy = this.onBuy.bind(this);
  }

  getSpotDetail() {
    this.props.renterGetSpot(this.props._id);
  }

  render() {
    console.log(this.props.address);
    return (
      <div>
        <ul className="result-details">
          <li className="address">Address: {this.props.address}</li>
          <li>Distance: {this.props.distance}</li>
          <li>Vendor: {this.props.vendor}</li>
          <li>Price: {this.props.price}</li>
          <li>Start date: {this.props.startDate}</li>
          <li>End date: {this.props.endDate}</li>
          <img src={'http://greport.gru.edu/wp-content/uploads/2013/12/parkingspot.jpg'} alt="video" />
        </ul>
        <Link to="/renter/buy-spot">
          <button onClick={this.getSpotDetail}>Buy Spot</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { renterGetSpot })(ResultItem);
