import React, { Component } from 'react';

const vehicleData = [
  { make: 'Toyota', model: 'Prius', year: '2010', color: 'hot pink', license: 123456 },
];

const VehicleItem = (props) => {
  return (
    <div>
      <p> Make: {props.make}</p>
      <p> Model: {props.model}</p>
      <p> Year: {props.year}</p>
      <p> Color: {props.color}</p>
      <p> License #: {props.license}</p>
    </div>
  );
};

class VehicleItemRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const users = vehicleData.map((vehicle) => {
      return (
        <VehicleItem make={vehicle.make} model={vehicle.model} year={vehicle.year} color={vehicle.color} license={vehicle.license} key={vehicle.license} />
      );
    });
    return (
      <div className="newPost">
        <div className="heading">
          <span>Choose Vehicle</span>
        </div>
        {users}
      </div>
    );
  }
}

export default VehicleItemRender;
