// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

// Component
const Repo = ({ full_name: fullName, owner, description }) => (
  <article className="card">
    <img className="card__image" src={owner.avatar_url} alt="illustration" />
    <h2 className="card__title">{fullName}</h2>
    <h3 className="card__subtitle">{owner.login}</h3>
    <p className="card__text">{description}</p>
  </article>
);

Repo.propTypes = {
  full_name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  description: PropTypes.string,
};

Repo.defaultProps = {
  description: 'Pas de description',
};

// Export
export default Repo;
