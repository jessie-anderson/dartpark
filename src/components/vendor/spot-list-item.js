import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Modal, Tab, Tabs } from 'react-bootstrap';
let Dropzone = require('react-dropzone');

class SpotItem extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      spotAddress: '',
      spotName: '',
      vendorName: '',
      spotPrice: '',
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
        <p>{this.state.spotName}</p>
        <button >Edit</button>
        <p>{'Address: ' + this.state.spotAddress}</p>
        <p>{'Price: ' + this.state.spotPrice}</p>
        <p>{'Vendor : ' + this.state.vendorName}</p>
        <p>{'displayModal : ' + this.state.displayModal}</p>
        <button onClick={this.onButtonClick}>Upload Photo</button>

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
export default SpotItem;
