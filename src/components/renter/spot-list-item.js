import React, { Component } from 'react';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      vendor: this.props.vendor,
      distance: 0,
      price: this.props.price,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
    };
  }

  render() {
    console.log(this.props.address);
    return (
      <div>
        <ul className="result-details">
          <li className="address">Address: {this.props.address}</li>
          <li>Vendor: {this.props.vendor}</li>
          <li>Distance from you: {this.state.distance}</li>
          <li>Price: {this.props.price}</li>
          <li>Start date: {this.props.startDate}</li>
          <li>End date: {this.props.endDate}</li>
          <img src={'http://greport.gru.edu/wp-content/uploads/2013/12/parkingspot.jpg'} alt="video" />
        </ul>
      </div>
    );
  }
}

export default ResultItem;
