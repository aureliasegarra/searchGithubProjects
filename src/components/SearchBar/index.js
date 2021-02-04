// Import npm
import React from 'react';

// Import data
import './style.scss';

// Component
const SearchBar = () => (
  <form className="container">
    <label className="search-label" htmlFor="search-input">
      <input
        type="text"
        id="search-input"
        placeholder="Search ..."
      />
      <i className="fa fa-search search-icon" />
    </label>
  </form>
);

// Export
export default SearchBar;
