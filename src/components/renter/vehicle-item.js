import React, { Component } from 'react';

// dumb component
class VehicleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default VehicleItem;
