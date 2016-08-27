// TODO: make spots that are bought appear different from those that are still available
// TODO: implement delete button on spots that haven't been bought yet to allow vendor
// to delete them

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vendorGetSpot, vendorGetSpots } from '../../actions/spot-actions';
import SpotItem from './spot-list-item';
// import { bootstrap } from 'react-bootstrap';
import { Link } from 'react-router';


class VendorManage extends Component {
  constructor(props) {
    super(props);

    this.renderSpots = this.renderSpots.bind(this);
  }

  componentWillMount() {
    this.props.vendorGetSpots();
  }

  renderSpots() {
    if (this.props.spots === undefined) {
      return (
        <div>Loading spots...</div>
      );
    } else {
      const spotItems = this.props.spots.map(spot => {
        return (
          <SpotItem
            spotName={spot.spotName}
            address={spot.address}
            vendor={spot.vendor}
            price={spot.price}
            startDate={spot.startDate}
            endDate={spot.endDate}
            key={spot._id}
            _id={spot._id}
          />
        );
      });
      console.log(spotItems);
      return spotItems;
    }
  }


  render() {
    const spots = this.renderSpots();
    if (this.props.spots.length === 0) {
      return (
        <div id="general-style">
          <div id="center-content">
            <h1>Manage Spots</h1>
            <h2>You have not created any spots yet.  Click the button below to add some spots to your profile.</h2>
            <Link to="/vendor/create-spots" ><button id="addBtn" onClick={this.onButtonPress}>+Add Spots</button></Link>
          </div>
        </div>
      );
    } else {
      return (
        <div id="vendor-manage">
          <div id="center-content">
            <h1>Manage Spots</h1>
            <div>{spots}</div>
            <Link to="/vendor/create-spots" ><button id="std-btn" onClick={this.onButtonPress}>+Add Spots</button></Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    spots: state.spots.all,
  };
};

export default connect(mapStateToProps, { vendorGetSpots, vendorGetSpot })(VendorManage);
