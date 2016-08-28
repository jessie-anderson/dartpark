// detail of spot that renders when renter searches for spots
// TODO: connect "buy" button to component that implements paying API

import React, { Component } from 'react';
import { buySpot } from '../../actions/spot-actions';
import { createConversation } from '../../actions/message-actions';
import { connect } from 'react-redux';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.onBuy = this.onBuy.bind(this);
  }

  onBuy() {
    this.props.buySpot(this.props._id);
    this.props.createConversation(this.props.vendorId);
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
        <button onClick={this.onBuy}>Buy Spot</button>
      </div>
    );
  }
}

export default connect(null, { buySpot, createConversation })(ResultItem);
