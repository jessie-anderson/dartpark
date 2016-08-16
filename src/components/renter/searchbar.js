// auto complete Google still to be done
// corresponds to FindSpot-Search on mockups

import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(this.state.searchterm);
  }
  render() {
    return (
      <div>
        <h3>Find a Spot</h3>
        <div id="searchbar"><input onChange={this.onInputChange} value={this.state.searchterm} /></div>
        <button>Search this location!</button>
      </div>
    );
  }
}
export default SearchBar;
