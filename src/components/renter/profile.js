import React, { Component } from 'react';
import CardItemEdit from './carditem-edit';
import CarInfo from './car-info';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      description: '',
    };
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
  }

  onChangeFirst(event) {
    this.setState({ firstname: event.target.value });
  }

  onChangeLast(event) {
    this.setState({ lastname: event.target.value });
  }

  onChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <div className="Profile">
        <div className="prof-header">
          <h3>Profile</h3>
        </div>
        <div className="inputs">
          <input value={this.state.firstname} onChange={this.onChangeFirst} placeholder="First Name" />
        </div>
        <div className="inputs">
          <input value={this.state.lastname} onChange={this.onChangeLast} placeholder="Last Name" />
        </div>
        <div className="inputs">
          <input value={this.state.address} onChange={this.onChangeAddress} placeholder="Address" />
        </div>
        <div className="inputs">
          <input value={this.state.description} onChange={this.onChangeDescription} placeholder="Add a description!" />
        </div>
        <div className="button">
          <button id="edit-info">Edit My Info</button>
        </div>
        <CardItemEdit />
        <CarInfo />
      </div>
    );
  }
}

export default Profile;
