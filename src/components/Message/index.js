// Import npm
import React from 'react';
import PropTypes from 'prop-types';
// Import data
import './style.scss';

// Component
const Message = ({ message }) => (
  <div className="result__input">
    {message}
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

// Export
export default Message;
