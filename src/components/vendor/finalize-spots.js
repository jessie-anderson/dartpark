import React, { Component } from 'react';

class FinalizeSpots extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.getAllSpots = this.getAllSpots.bind(this);
  }

  getAllSpots() {

  }

  render() {
    return (
      <div>
        <h1>Review Created Spots</h1>
        {this.getAllSpots()}
        <button>Done</button>
      </div>
    );
  }
}
export default FinalizeSpots;
