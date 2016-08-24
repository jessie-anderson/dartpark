import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Modal, Tab, Tabs } from 'react-bootstrap';
let Dropzone = require('react-dropzone');
import { connect } from 'react-redux';
import { updateSpot } from '../../actions/spot-actions';

class SpotItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      spotName: this.props.spotName,
      address: this.props.address,
      price: this.props.price,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      isEditing: false,
      displayModal: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDropFunction = this.onDropFunction.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onSpotNameChange = this.onSpotNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onSave() {
    const spot = {
      spotName: this.state.spotName,
      address: this.state.address,
      price: this.state.price,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    this.props.updateSpot(spot, this.props._id);
    this.setState({ isEditing: !this.state.isEditing });
  }

  onAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  onPriceChange(event) {
    this.setState({ price: event.target.value });
  }

  onStartDateChange(event) {
    this.setState({ startDate: event.target.value });
  }

  onEndDateChange(event) {
    this.setState({ endDate: event.target.value });
  }

  onSpotNameChange(event) {
    this.setState({ spotName: event.target.value });
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
    if (!this.state.isEditing) {
      return (
        <div id="spot-item">
          <button id="std-btn" onClick={this.onEditClick}>Edit</button>
          <h1>{this.props.spotName}</h1>
          <p>Address: {this.props.address}</p>
          <p>Price: {this.props.price}</p>
          <p>Start date: {this.props.startDate}</p>
          <p>End date: {this.props.endDate}</p>
          <button id="std-btn" onClick={this.onButtonClick}>Upload Photo</button>

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
    } else {
      return (
        <div id="center-content">
          <button id="std-btn" onClick={this.onSave}>Save Changes</button>
          <button id="std-light-btn" onClick={this.onEditClick}>Cancel</button>

          <label htmlFor="spotName">Name:</label>
          <input value={this.state.spotName} onChange={this.onSpotNameChange} id="spotName" />

          <label htmlFor="address">Address:</label>
          <input value={this.state.address} onChange={this.onAddressChange} id="address" />

          <label htmlFor="price">Price:</label>
          <input value={this.state.price} onChange={this.onPriceChange} id="price" />

          <label htmlFor="startDate">Start date:</label>
          <input value={this.state.startDate} onChange={this.onStartDateChange} id="startDate" />

          <label htmlFor="endDate">End date:</label>
          <input value={this.state.endDate} onChange={this.onEndDateChange} id="endDate" />

          <button id="std-btn" onClick={this.onButtonClick}>Upload Photo</button>

          <Modal show={this.state.displayModal} onHide={this.onButtonClick}>
            <Modal.Header closeButton>Add Picture</Modal.Header>
            <Modal.Body>
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Upload Picture from Computer">
                  <Dropzone rev="dropzone" onDrop={this.onDropFunction}><div>Upload</div></Dropzone>
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
}
export default connect(null, { updateSpot })(SpotItem);
