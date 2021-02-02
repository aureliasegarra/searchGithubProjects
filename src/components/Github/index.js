// Import npm
import React from 'react';

// Import components
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// Import data
import logoGithub from './logo-github.png';
import './style.scss';

// == Component
const Github = () => (
  <div className="git">
    <img className="logo" src={logoGithub} alt="github logo" />
    <SearchBar />
    <ReposResults />
    <Message />
  </div>
);

// Export
export default Github;
