// Import npm
import React, { useState } from 'react';

// Import components
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Repos from 'src/components/Repos';

// Import data
import reposData from 'src/data/repos';
import logoGithub from './logo-github.png';
import './style.scss';

// == Component
const Github = () => {
  // Function to parse the results and minimize them
  const repoParser = (repos) => repos.map((repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    owner: {
      avatar_url: repo.owner.avatar_url,
      login: repo.owner.avatar_url,
    },
    description: repo.description ? repo.description : 'Pas de description',
  }));

  const [repos, setRepos] = useState(repoParser(reposData.items));
  return (
    <div className="git">
      <img className="logo" src={logoGithub} alt="github logo" />
      <SearchBar />
      <Message message="la recherche a trouvé X résultats" />
      <Repos repos={repos} />
    </div>
  );
};

// Export
export default Github;
