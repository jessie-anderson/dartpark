// TODO: fix card info stuff!! spots and cars are mostly taken care of
// TODO: profile picture implementation!!

import React, { Component } from 'react';
// import CardItemEdit from './carditem-edit';
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
    console.log(event.target.value);
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
          <div>
            <VehicleItem
              _id={car._id}
              key={car._id}
              make={car.make}
              model={car.model}
              year={car.year}
              paintcolor={car.paintcolor}
            />
          </div>
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
        <div id="general-style">
          <h1>Profile Information</h1>
          <div id="renter-bio">
            <p>Name: {this.props.username}</p>
            <p>Bio: {this.props.bio}</p>
            <button id="std-btn" onClick={this.onEditClick}>Edit Profile</button>
          </div>
        </div>
      );
    } else {
      profile = (
        <div id="general-style">
          <div id="center-content-np">
            <h1>Profile Information</h1>
            <label htmlFor="name">Name:</label>
            <input value={this.state.username} onChange={this.onChangeUsername} id="name" />
            <label htmlFor="bio">Bio:</label>
            <input value={this.state.bio} onChange={this.onChangeBio} id="bio" />
            <button id="std-btn" onClick={this.onEditClick}>Cancel</button>
            <button id="std-btn" onClick={this.saveChanges}>Save Changes</button>
          </div>
        </div>
      );
    }
    return (
      <div id="center-content-np">
        {profile}
        <span id="divider-label"> Cars </span>
        <div id="spotsMain">{cars}</div>
        <Link to="/renter/add-car"><button id="std-light-btn">Add Car</button></Link>
        <span id="divider-label"> Rented Spots </span>
        <div id="spotsMain">{spots}</div>
        <Link to="/renter/search"><button id="std-light-btn">Find a Spot</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userBio = typeof localStorage.getItem('userBio') !== 'undefined' ? localStorage.getItem('userBio') : state.auth.user.bio;
  const userName = typeof localStorage.getItem('userName') !== 'undefined' ? localStorage.getItem('userName') : state.auth.user.username;

  return {
    bio: userBio,
    username: userName,
    cars: state.cars.all,
    spots: state.spots.all,
  };
};

export default connect(mapStateToProps, { changeRenterBioAndName, renterGetSpotsAndCars })(Profile);
