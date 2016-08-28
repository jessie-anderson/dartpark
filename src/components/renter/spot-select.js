// Component that renders all available spots when renter searches for spots
// TODO: implement sorting by distance using the google maps api
// TODO: implement sorting by price

import React from 'react';
import ResultItem from './spot-list-item';
import { connect } from 'react-redux';
import { getAllSpots } from '../../actions/spot-actions';

// corresponds to FindSpot-Search on mockups

const SelectSpot = (props) => {
  props.getAllSpots();
  if (props.spots === undefined) {
    return (
      <div>Loading Spots...</div>
    );
  } else {
    // (props.spots);

    const allSpots = props.spots.map(spot => {
      return (
        <ResultItem
          address={spot.address}
          vendor={spot.vendor.username}
          vendorId={spot.vendor._id}
          price={spot.price}
          startDate={spot.startDate}
          endDate={spot.endDate}
          key={spot._id}
          _id={spot._id}
        />
      );
    });
    return (<div>{allSpots}</div>);
  }
};

const mapStateToProps = (state) => {
  return {
    spots: state.spots.all,
    searchTerm: state.spots.searchTerm,
  };
};

export default connect(mapStateToProps, { getAllSpots })(SelectSpot);
