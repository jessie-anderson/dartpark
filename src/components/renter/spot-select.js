// import SimpleSearchBar from './simple-bar';
import React from 'react';
import ResultItem from './spot-list-item';
// import { Link } from 'react-router';
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
    const allSpots = props.spots.map(spot => {
      return (
        <ResultItem
          address={spot.address}
          vendor={spot.vendor.username}
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
