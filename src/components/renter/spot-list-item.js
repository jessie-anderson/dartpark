import React, { Component } from 'react';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '123 Darty Rd.',
      vendor: 'P. Hanlon',
      distance: '4 miles away',
      price: '$60',
    };
  }

  render() {
    return (
      <div>
        <div className="ResultItem">
          <p>Address: {this.state.address}</p>
          <p>Vendor: {this.state.vendor}</p>
          <p>Distance from you: {this.state.distance}</p>
          <p>Price: {this.state.price}</p>
          <img src={'http://greport.gru.edu/wp-content/uploads/2013/12/parkingspot.jpg'} alt="video" />
        </div>
      </div>
    );
  }
}


// // mapStateToProps
// const mapStateToProps = (state) => (
//   {
//     user: state.auth.user,
//   }
// );

export default ResultItem;
