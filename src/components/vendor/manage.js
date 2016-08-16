import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrap } from 'react-bootstrap';
import { Link } from 'react-router';


class VendorManage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.onButtonPress = this.onButtonPress.bind(this);
  }


  onButtonPress(event) {

  }


  render() {
    return (
      <div>
        <h1>Manage Spots</h1>
        <h2>You have not created any spots yet.  Click the button below to add some spots to your profile.</h2>
        <Link to="/vendor/create-spots" ><button onClick={this.onButtonPress}>+Add Spots</button></Link>
      </div>
    );
  }
}

export default VendorManage;
