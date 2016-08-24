import React, { Component } from 'react';
import { Link } from 'react-router';
import { renterGetSpot } from '../../actions/spot-actions';
import { connect } from 'react-redux';


// corresponds to FindSpot-Search on mockups

class SpotItem extends Component {
  constructor(props) {
    super(props);
    this.onViewClick = this.onViewClick.bind(this);
  }

  onViewClick() {
    this.props.renterGetSpot(this.props._id);
  }

  render() {
    return (
      <div>
        <p>Address: {this.props.address}</p>
        <p>Price: {this.props.price}</p>
        <p>startDate: {this.props.startDate}</p>
        <p>endDate: {this.props.endDate}</p>
        <Link to="/renter/spot-detail">
          <button onClick={this.onViewClick}>View Spot Details</button>
        </Link>
      </div>
      );
  }
}

export default connect(null, { renterGetSpot })(SpotItem);
