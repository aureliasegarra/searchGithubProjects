// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Repo from './Repo';

// Import data
import './style.scss';

// Component
const Repos = ({ repos }) => (
  <div className="wrapper">
    <ul className="repo">
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          {...repo}
        />
      ))}
    </ul>
  </div>
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// Export
export default Repos;
