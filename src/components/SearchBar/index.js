// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

// Component
const SearchBar = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(inputValue);
  };

  return (
    <form className="container" onSubmit={handleOnSubmit}>
      <label className="search-label" htmlFor="search-input">
        <input
          type="text"
          id="search-input"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Search ..."
        />
        <i className="fa fa-search search-icon" />
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

// Export
export default SearchBar;
