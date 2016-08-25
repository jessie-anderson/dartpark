// TODO: make class that shows all details of spot that the renter has clicked on
// and implement delete button that allows them to delete that spot
// TODO: connect this to the payment API to allow renter to request refund? is this
// too complicated? probably... in which case we can just nix deleting the spot altogether

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renterDeleteSpot } from '../../actions/spot-actions';

class SpotDetail extends Component {

}

const mapStateToProps = (state) => {
  // map to current spot
};

export default connect(mapStateToProps, { renterDeleteSpot });
