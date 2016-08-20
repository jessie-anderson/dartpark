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
    this.submit = this.submit.bind(this);
  }
  onSearchBarChange(value) {
    console.log(value);
    this.setState({ searchTerm: value });
    console.log('the state is ', this.state.searchTerm);
  }

  suggestionSelection(value) {
    this.setState({ suggestClick: true });
    this.onSearchBarChange(value);
  }

  submit(event) {
    if (!this.state.suggestClick) {
      console.log('suggestClick is true');
    } else {
      // this.state.searchTerm.label;
      console.log('This is console log', this.state.searchTerm.label);
      this.props.onSearchBarChange(this.state.searchterm.label);
      console.log(this.state.searchTerm.label);
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
