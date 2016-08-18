import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';

class UploadPopUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };
    this.uploadPicture = this.uploadPicture.bind(this);
    this.googlePicture = this.googlePicture.bind(this);
  }

  uploadPicture() {

  }

  googlePicture() {

  }

  render() {
    return (
      <div>
        <p>Add Picture</p>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Upload Picture"></Tab>
          <Tab eventKey={2} title="Use Google Photo"></Tab>
        </Tabs>
      </div>
    );
  }
}
export default UploadPopUp;
