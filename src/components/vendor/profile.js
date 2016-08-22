import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Modal, Tab, Tabs } from 'react-bootstrap';
let Dropzone = require('react-dropzone');
import VendorNavBar from './navbar';

class VendorProfile extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      vendorName: '',
      vendorAddress: '',
      vendorProfilePic: '',
      vendorDescription: '',
      displayModal: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDropFunction = this.onDropFunction.bind(this);
  }

  onButtonClick(event) {
    if (this.state.displayModal) {
      this.setState({ displayModal: false });
    } else {
      this.setState({ displayModal: true });
    }
  }
  onDropFunction(files) {

  }

  render() {
    return (
      <div>
        <VendorNavBar />
        <h1>Edit Profile</h1>
        <label htmlFor="nameVendor">Name: </label>
        <input id="nameVendor" placeholder={this.vendorName}></input>

        <label htmlFor="addressVendor">Spot Address: </label>
        <input id="addressVendor" placeholder={this.vendorAddress}></input>

        <label htmlFor="descriptionVendor">Spot Address: </label>
        <input id="descriptionVendor" placeholder={this.vendorDescription}></input>

        <button onClick={this.onButtonClick}>Change Profile Picture</button>
        <Modal show={this.state.displayModal} onHide={this.onButtonClick}>
          <Modal.Header closeButton>Add Picture</Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Upload Picture from Computer">
                <Dropzone rev="dropzone" onDrop={this.onDropFunction}><div>test</div></Dropzone>
              </Tab>
              <Tab eventKey={2} title="Use Google Photo">lksd</Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>ldkajs</Modal.Footer>
        </Modal>

      </div>
    );
  }
}
export default VendorProfile;
