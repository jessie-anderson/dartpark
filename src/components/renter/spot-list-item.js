import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
import SearchBar from './searchbar';


// corresponds to FindSpot-Select on mockups

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'address',
      vendor: 'vendor',
      distance: 'distance',
      price: 'price',
    };
  }

  render() {
    return (
      <div>
        <p>Find a Spot</p>
        <div id="searchbar">{SearchBar}</div>
        <div className="ResultItem">
          <p>{this.state.address}</p>
          <p>{this.state.vendor}</p>
          <p>{this.state.distance}</p>
          <p>{this.state.price}</p>
          <img src={'http://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7CjpfUeJc8s/v1/-1x-1.jpg'} alt="video" />
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
