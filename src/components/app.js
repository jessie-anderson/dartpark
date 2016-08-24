import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenterNavBar from './renter/navbar';
import VendorNavBar from './vendor/navbar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  renderNavBar() {
    if (this.props.role) {
      if (this.props.role === 'renter') {
        return (
          <RenterNavBar />
        );
      } else if (this.props.role === 'vendor') { // vendor
        return (
          <VendorNavBar />
        );
      } else { // default non-specific bar
        return (
          <div id="header-bar">dartPark</div>
        );
      }
    } else {
      console.log('error finding usertype');
      return (<div id="header-bar">dartPark</div>);
    }
  }
  render() {
    return (
      <div>
        {this.renderNavBar()}
        <div>
            {this.props.children}
            {console.log(this.props.role)}
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
