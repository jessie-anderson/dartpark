import React, { Component } from 'react';
import { Link } from 'react-router';

import Geosuggest from 'react-geosuggest';

// import Welcome from './welcome';

// example class based component (smart component)

class HomePage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Geosuggest />
        Home Page
        <Link to={'/signin'}><button>sign in</button></Link>
      </div>

    );
  }
}

export default HomePage;
