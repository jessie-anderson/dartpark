import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrap } from 'react-bootstrap';

class CreateSpots extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.onButtonPress=this.onButtonPress.bind(this);
  }




  onButtonPress(event) {

  }


  render() {
    return (
      <h1>Create Spot(s)<h1>
      <label for="numSpots">Number of Spots: </label>
      <input id="numSpots" ><br>
      <div>Note: Dont worry, you can edit all this information further on the next page.</div>
      <button onClick={this.onButtonPress}>Create Spots<button>
    );
  }
}
