// Import npm
import React from 'react';

// Import data
import './style.scss';

// Component
const SearchBar = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Rechercher un repo"
      className="search"
    />
  </form>
);

// Export
export default SearchBar;
