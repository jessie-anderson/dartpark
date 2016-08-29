import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenterNavBar from './renter/navbar';
import VendorNavBar from './vendor/navbar';
import { Link } from 'react-router';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      // role: localStorage.getItem('userRole'),
    };
  }
  renderNavBar() {
    const role = localStorage.getItem('userRole') ? localStorage.getItem('userRole') : this.props.role;
    if (role) {
      if (role === 'renter') {
        return (
          <RenterNavBar />
        );
      } else if (role === 'vendor') { // vendor
        return (
          <VendorNavBar />
        );
      } else { // default non-specific bar
        return (
          <div id="header-bar">
            <Link to="/" id="home-link">
            dartPark
            </Link>
          </div>
        );
      }
    } else {
      console.log('error finding usertype');
      return (
        <div id="header-bar">
          <Link to="/" id="home-link">
          dartPark
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderNavBar()}
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    role: state.auth.userType,
  }
);

export default connect(mapStateToProps, null)(App);
