import React, { Component } from 'react';
// import { browserHistory, Link } from 'react-router';
// import { connect } from 'react-redux';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <button >Profile</button>
    );
  }
}


export default NavBar;

// export default connect(mapStateToProps, { signoutUser })(NavBar); // / export functions where null is
