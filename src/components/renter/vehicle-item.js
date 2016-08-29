// car "summary" that renders on renter's profile page

import React, { Component } from 'react';
import { Link } from 'react-router';
import { getCar } from '../../actions/car-actions';
import { connect } from 'react-redux';

class VehicleItem extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick() {
    this.props.getCar(this.props._id);
  }

  render() {
    console.log(this.props);
    return (
      <div id="carDisp">
        <h2>{this.props.make}</h2>
        <p>Model: {this.props.model}</p>
        <p>Year: {this.props.year}</p>
        <p>Color: {this.props.paintcolor}</p>
        <Link to="/renter/view-car">
          <button onClick={this.onEditClick}>Edit Car Information</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { getCar })(VehicleItem);
