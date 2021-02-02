// Import npm
import React from 'react';

// Import data
import './style.scss';

// Component
const SearchBar = () => (
  <form className="search">
    <button type="submit" className="searchButton">
      <i className="fa fa-search" />
    </button>
    <input
      type="text"
      placeholder="Search ..."
      className="searchTerm"
    />
  </form>
);

// Export
export default SearchBar;
