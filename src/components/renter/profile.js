import React, { Component } from 'react';
import CardItemEdit from './carditem-edit';
import { connect } from 'react-redux';
import VehicleItemRender from './vehicle-render';
import { changeRenterBioAndName } from '../../actions/user-actions';
import { renterGetSpots } from '../../actions/spot-actions';
import { getCars } from '../../actions/car-actions';
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
    this.props.renterGetSpots();
    this.props.getCars();
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
        console.log(spot);
        return (
          <div id={spot._id} key={spot._id}>
            <p>Address: {spot.address}</p>
            <p>Price: {spot.price}</p>
            <p>startDate: {spot.startDate}</p>
            <p>endDate: {spot.endDate}</p>
          </div>
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
        return (
          <div id={car._id} key={car._id}>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Color: {car.paintcolor}</p>
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

export default connect(mapStateToProps, { changeRenterBioAndName, renterGetSpots, getCars })(Profile);
