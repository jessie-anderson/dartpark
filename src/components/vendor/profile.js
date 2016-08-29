// TODO: fix this to actually display vendor info


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVendorBioAndName } from '../../actions/user-actions';

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
  }

  componentWillMount() {
    // this.props.renterGetSpotsAndCars();
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
    this.props.changeVendorBioAndName(this.state.bio, this.state.username);
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    let profile;
    if (!this.state.isEditing) {
      profile = (
        <div id="general-style">
          <div id="center-content">
            <div id="renter-bio">
              <h1>Profile Information</h1>
              <p>Name: {this.props.username}</p>
              <p>Bio: {this.props.bio}</p>
              <button id="std-btn" onClick={this.onEditClick}>Edit Profile</button>
            </div>
          </div>
        </div>
      );
    } else {
      profile = (
        <div id="general-style">
          <div id="center-content">
            <h1>Profile Information</h1>
            <div>
              <label htmlFor="name">Name:</label>
              <input value={this.state.username} onChange={this.onChangeUsername} id="name" />
            </div>
            <div>
              <label htmlFor="bio">Bio:</label>
              <input value={this.state.bio} onChange={this.onChangeBio} id="bio" />
            </div>
            <button id="std-btn" onClick={this.onEditClick}>Cancel</button>
            <button id="std-btn" onClick={this.saveChanges}>Save Changes</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {profile}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userBio = typeof localStorage.getItem('userBio') !== 'undefined' ? localStorage.getItem('userBio') : state.auth.user.bio;
  const userName = typeof localStorage.getItem('userName') !== 'undefined' ? localStorage.getItem('userName') : state.auth.user.username;


  console.log(userBio);
  return {
    bio: userBio,
    username: userName,
    cars: state.cars.all,
    spots: state.spots.all,
  };
};

export default connect(mapStateToProps, { changeVendorBioAndName })(Profile);
