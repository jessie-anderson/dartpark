import SearchBar from './searchbar';
import React from 'react';
import ResultItem from './spot-list-item';
import { Link } from 'react-router';


// corresponds to FindSpot-Search on mockups

const SelectSpot = (props) => {
  return (
    <div>
      <div className="header">
        <p>Find a Spot</p>
        <h1>Sort your search by...</h1>
        <div className="sortbuttons">
          <button>Price</button>
          <button>Distance</button>
          <h2>Number of results</h2>
          <button>5</button>
        </div>
        <SearchBar />
        <ResultItem />
        <Link to="/renter/spot-detail"><button>Select this spot</button></Link>
        <ResultItem />
        <Link to="/renter/spot-detail"><button>Select this spot</button></Link>
      </div>
    </div>
    );
};

export default SelectSpot;
