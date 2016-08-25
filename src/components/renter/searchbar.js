// TODO: auto complete Google still to be done
// corresponds to FindSpot-Search on mockups

import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import { Link } from 'react-router';
import { saveSearch } from '../../actions/spot-actions';
import { connect } from 'react-redux';


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
  }

  suggestionSelection(value) {
    this.setState({ suggestClick: true });
    this.onSearchBarChange(value);
  }

  submit(event) {
    if (!this.state.suggestClick) {
      console.log('empty');
    } else {
      console.log(this.state.searchTerm.label);
      this.props.saveSearch(this.state.searchTerm.label);
    }
  }

  render() {
    return (
      <div>
        <h1>Find a Spot</h1>
        <div id="search">
          <div id="searchbar"><Geosuggest onSuggestSelect={this.suggestionSelection} onChange={this.onSearchBarChange} /></div>
          <Link to="/renter/select-spot"><button id="search-button" onClick={this.submit}>Search this location!</button></Link>
        </div>
      </div>
    );
  }
}
export default connect(null, { saveSearch })(SearchBar);
