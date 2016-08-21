import React, { Component } from 'react';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Sig Ep',
      vendor: 'P. Hanlon',
      distance: '4 miles away',
      price: '$1769',
    };
  }

  render() {
    return (
      <div>
        <ul className="result-details">
          <li className="address">Address: {this.state.address}</li>
          <li>Vendor: {this.state.vendor}</li>
          <li>Distance from you: {this.state.distance}</li>
          <li>Price: {this.state.price}</li>
          <img src={'http://greport.gru.edu/wp-content/uploads/2013/12/parkingspot.jpg'} alt="video" />
        </ul>
      </div>
    );
  }
}

export default ResultItem;
