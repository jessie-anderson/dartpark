import SimpleSearchBar from './simple-bar';
import React from 'react';
import ResultItem from './spot-list-item';
import { Link } from 'react-router';


// corresponds to FindSpot-Search on mockups

const SelectSpot = (props) => {
  return (
    <div>
      <div className="spot-select">
        <ul>
          <li><h3>Find a Spot</h3></li>
          <ul className="button-list">
            <li id="search-by">Search by: </li>
            <li><button id="pd-button">Price</button></li>
            <li><button id="pd-button">Distance</button></li>
          </ul>
        </ul>
        <div className="search-result">
          <SimpleSearchBar />
          <ResultItem />
          <Link to="/renter/spot-detail"><button id="search-button">Select this spot</button></Link>
          <ResultItem />
          <Link to="/renter/spot-detail"><button id="search-button">Select this spot</button></Link>
        </div>
      </div>
    </div>
    );
};

export default SelectSpot;
