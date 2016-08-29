import React, { Component } from 'react';
// import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
let FontAwesome = require('react-fontawesome');
import { Link } from 'react-router';
import { signoutUser } from '../../actions/user-actions';
import MediaQuery from 'react-responsive';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleSignOut() {
    this.props.signoutUser();
  }
  render() {
    return (
      <div>
        <MediaQuery minWidth={601}>
          <div id="nav-bar">
            <div id="left-align">
              <div onClick={this.handleSignOut} id="nav-link">
                <FontAwesome id="fa-icon"
                  className="sign-out"
                  name="sign-out"
                />
                <span>Sign Out</span>
              </div>
              <Link to="/vendor/profile" id="nav-link">
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
              <Link to="/vendor/manage" id="nav-link">
                <FontAwesome id="fa-icon"
                  className="dashboard"
                  name="dashboard"
                />
                <span>Manage</span>
              </Link>
              <Link to="/messaging" id="nav-link">
                <FontAwesome id="fa-icon"
                  className="commenting"
                  name="commenting"
                />
                <span>Messages</span>
              </Link>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <div id="nav-bar">
            <div id="left-align">
              <div onClick={this.handleSignOut} id="nav-link">
                <FontAwesome id="fa-icon"
                  className="sign-out"
                  name="sign-out"
                />
                <span>Sign Out</span>
              </div>
              <Link to="/vendor/profile" id="nav-link">
                <FontAwesome id="fa-icon"
                  className="user"
                  name="user"
                />
                <span>Profile</span>
              </Link>
            </div>
            <div id="right-align">
              <Link to="/vendor/manage" id="nav-link">
                <FontAwesome id="fa-icon"
                  className="dashboard"
                  name="dashboard"
                />
                <span>Manage</span>
              </Link>
              <Link to="/messaging" id="nav-link">
                <FontAwesome id="fa-icon"
                  className="commenting"
                  name="commenting"
                />
                <span>Messages</span>
              </Link>
            </div>
          </div>
        </MediaQuery>
      </div>

    );
  }
}

// export default NavBar;

export default connect(null, { signoutUser })(NavBar); // / export functions where null is
