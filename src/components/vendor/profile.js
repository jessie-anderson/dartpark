import React, { Component } from 'react';
// import { connect } from 'react-redux';

class VendorProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      vendorName: '',
      vendorAddress: '',
      vendorProfilePic: '',
      vendorDescription: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <label htmlFor="nameVendor">Name: </label>
        <input id="nameVendor" placeholder={this.vendorName}></input>

        <label htmlFor="addressVendor">Spot Address: </label>
        <input id="addressVendor" placeholder={this.vendorAddress}></input>

        <label htmlFor="descriptionVendor">Spot Address: </label>
        <input id="descriptionVendor" placeholder={this.vendorDescription}></input>

        <button>Change Picture</button>

      </div>
    );
  }
}
export default VendorProfile;
