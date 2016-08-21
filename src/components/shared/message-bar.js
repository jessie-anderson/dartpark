import React, { Component } from 'react';
// import { Link } from 'react-router';

class MessageBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  handleChange() {
    this.setState(event.target.value);
  }
  render() {
    return (
      <div>
        <input placeholder="Message..."></input>
        <button onClick>Send</button>
      </div>
    );
  }
}

export default MessageBar;
