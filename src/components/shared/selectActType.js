import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
// require('dotenv').config();


class selectActType extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { };
  }
  render() {
    return (
      <div>
        <div id="center-content">
          <div id="select-act">
            <div id="sa-title">Select Account Type</div>
            <div id="spot-btn-div">
              <Link to={'/signin-renter'}><button id="spots-btn">Renter</button></Link>
            </div>
            <div id="spot-btn-div">
              <Link to={'/signin-vendor'}><button id="spots-btn">Vendor</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that know state in props
export default selectActType;
