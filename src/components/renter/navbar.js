import React, { Component } from 'react';
// import { browserHistory, Link } from 'react-router';
// import { connect } from 'react-redux';
let FontAwesome = require('react-fontawesome');
import { Link } from 'react-router';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="left-align">
          <Link to="#" id="nav-link">
            <FontAwesome id="fa-icon"
              className="sign-out"
              name="sign-out"
            />
            <span>Sign Out</span>
          </Link>
          <Link to="/renter/profile" id="nav-link">
            <FontAwesome id="fa-icon"
              className="user"
              name="user"
            />
            <span>Profile</span>
          </Link>
        </div>
        <div>
          dartPark
        </div>
        <div id="right-align">
          <Link to="/renter/search" id="nav-link">
            <FontAwesome id="fa-icon"
              className="search"
              name="search"
            />
            <span>Search</span>
          </Link>
          <Link to="/messaging" id="nav-link">
            <FontAwesome id="fa-icon"
              className="home"
              name="home"
            />
            <span>Messages</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

// export default connect(mapStateToProps, { signoutUser })(NavBar); // / export functions where null is
