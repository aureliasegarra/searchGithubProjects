// Import npm
import React from 'react';

// Import components
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// Import data
import './style.scss';

// == Component
const Github = () => (
  <div className="git">
    <h1>Bienvenue dans la recherche de Github !</h1>
    <SearchBar />
    <ReposResults />
    <Message />
  </div>
);

// Export
export default Github;
