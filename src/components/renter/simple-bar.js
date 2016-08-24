// auto complete Google still to be done
// corresponds to FindSpot-Search on mockups

import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class SimpleSearchBar extends Component {
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
    console.log('the state: ' + this.state.searchTerm);
  }

  suggestionSelection(value) {
    this.setState({ suggestClick: true });
    this.onSearchBarChange(value);
  }

  submit(event) {
    if (!this.state.suggestClick) {

    } else {
      console.log(this.state.searchTerm.label);
    }
  }

  render() {
    return (
      <div id="simpleSearch">
        <Geosuggest id="geosuggest" onSuggestSelect={this.suggestionSelection} onChange={this.onSearchBarChange} />
      </div>
    );
  }
}
export default SimpleSearchBar;
