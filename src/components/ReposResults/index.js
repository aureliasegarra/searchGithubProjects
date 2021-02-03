// Import npm
import React from 'react';

// Import data
import './style.scss';

// Component
const ReposResults = () => (
  <div className="results">
    <input
      className="results__input"
      type="text"
      placeholder="La recherche a donné X résultats"
    />
  </div>
);

// Export
export default ReposResults;
