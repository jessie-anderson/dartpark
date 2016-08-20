// auto complete Google still to be done
// corresponds to FindSpot-Search on mockups

import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state =
    {
      searchTerm: '',
      suggestClick: false,
    };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
    this.suggestionSelection = this.suggestionSelection.bind(this);
  }
  onSearchBarChange(value) {
    console.log(value);
    this.setState({ searchTerm: value });
    console.log('the state: ' + this.state.searchTerm);
  }

  suggestionSelection(value) {
    this.setState({ suggestClick: true });
    this.onSearchBarChange(value);
  }

  submit(event) {
    if (!this.state.suggestClick) {

    } else {
      this.state.searchTerm.label;
    }
  }

  render() {
    return (
      <div>
        <h3>Find a Spot</h3>
        <Geosuggest onSuggestSelect={this.suggestionSelection} onChange={this.onSearchBarChange} />
        <button onClick={this.submit}>Search this location!</button>
      </div>
    );
  }
}
export default SearchBar;
