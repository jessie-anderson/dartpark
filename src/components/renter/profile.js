// TODO: fix card info stuff!! spots and cars are mostly taken care of
// TODO: profile picture implementation!!

import React, { Component } from 'react';
import CardItemEdit from './carditem-edit';
import { connect } from 'react-redux';
import VehicleItem from './vehicle-item';
import SpotItem from './spot-item';
import { changeRenterBioAndName, renterGetSpotsAndCars } from '../../actions/user-actions';
import { Link } from 'react-router';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      bio: this.props.bio,
      isEditing: false,
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.renderSpots = this.renderSpots.bind(this);
    this.renderCars = this.renderCars.bind(this);
  }

  componentWillMount() {
    this.props.renterGetSpotsAndCars();
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onChangeBio(event) {
    this.setState({ bio: event.target.value });
  }
  saveChanges() {
    this.props.changeRenterBioAndName(this.state.bio, this.state.username);
    this.setState({ isEditing: !this.state.isEditing });
  }

  renderSpots() {
    if (this.props.spots === undefined) {
      return (
        <p>Loading spots...</p>
      );
    } else {
      return this.props.spots.map(spot => {
        return (
          <SpotItem
            id={spot._id}
            key={spot._id}
            address={spot.address}
            price={spot.price}
            startDate={spot.startDate}
            endDate={spot.endDate}
          />
        );
      });
    }
  }

  renderCars() {
    if (this.props.cars === undefined) {
      return (
        <p>Loading cars...</p>
      );
    } else {
      return this.props.cars.map(car => {
        console.log(car);
        return (
          <VehicleItem
            _id={car._id}
            key={car._id}
            make={car.make}
            model={car.model}
            year={car.year}
            paintcolor={car.paintcolor}
          />
        );
      });
    }
  }

  render() {
    const spots = this.renderSpots();
    const cars = this.renderCars();
    let profile;
    if (!this.state.isEditing) {
      profile = (
        <div>
          <h1>Profile Information</h1>
          <p>Name: {this.props.username}</p>
          <p>Bio: {this.props.bio}</p>
          <button onClick={this.onEditClick}>Edit Profile</button>
        </div>
      );
    } else {
      profile = (
        <div>
          <h1>Profile Information</h1>
          <label htmlFor="name">Name:</label>
          <input value={this.state.username} onChange={this.onChangeUsername} id="name" />
          <label htmlFor="bio">Bio:</label>
          <input value={this.state.bio} onChange={this.onChangeBio} id="bio" />
          <button onClick={this.onEditClick}>Cancel</button>
          <button onClick={this.saveChanges}>Save Changes</button>
        </div>
      );
    }
    return (
      <div>
        {profile}
        <CardItemEdit />
        <div>{cars}</div>
        <Link to="/renter/add-car"><button>Add Car</button></Link>
        <div>{spots}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bio: state.auth.user.bio,
    username: state.auth.user.username,
    cars: state.auth.user.cars,
    spots: state.spots.all,
  };
};

export default connect(mapStateToProps, { changeRenterBioAndName, renterGetSpotsAndCars })(Profile);
