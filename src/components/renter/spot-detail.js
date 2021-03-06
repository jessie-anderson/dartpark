import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Modal, Tab, Tabs } from 'react-bootstrap';
// let Dropzone = require('react-dropzone');  //    <Dropzone rev="dropzone" onDrop={this.onDropFunction}><div>Upload</div></Dropzone>
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
      dropzoneObject: '',
      pictureName: '',

    };

    this.onButtonClick = this.onButtonClick.bind(this);
    // this.onDropFunction = this.onDropFunction.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onSpotNameChange = this.onSpotNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
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
  testFunction(event) {
    console.log('works! here is the event');
  }

  djsConfig() {
    return (<div className="dz-preview dz-file-preview">
      <div className="dz-details">
        <div className="dz-filename"><span data-dz-name="true"></span></div>
        <img data-dz-thumbnail="true" />
      </div>
      <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
      <div className="dz-success-mark"><span>✔</span></div>
      <div className="dz-error-mark"><span>✘</span></div>
      <div className="dz-error-message"><span data-dz-errormessage="true"></span></div>
    </div>);
  }
  initCallback(dropzone) {
    console.log('WORKS');
    this.dropzoneObject = dropzone;
  }


  render() {
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
export default connect(null, { updateSpot })(SpotItem);
