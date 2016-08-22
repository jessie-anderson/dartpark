import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

class selectActType extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
  }
  onSearchBarChange(value) {
    console.log(value);
  }

  suggestionSelection() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <h1>Select Account Type</h1>
        <Link to={'/signin-renter'}><button>Renter</button></Link>
        <Link to={'/signin-vendor'}><button>Vendor</button></Link>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
export default selectActType;
