// Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import components
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Repos from 'src/components/Repos';

// Import data
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

  const [repos, setRepos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // to store the data for submission
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');

  const baseUrl = `https://api.github.com/search/repositories?q=${searchQuery}`;

  useEffect(async () => {
    if (searchQuery) {
      try {
        setLoading(true);
        setMessage('Veuillez patienter');
        const response = await axios.get(baseUrl);
        const items = repoParser(response.data.items);
        setRepos(items);
        const totalResults = response.data.total_count;
        setTotal(totalResults);
        setMessage(`La recherche a donné ${totalResults} message${totalResults > 1 ? 's' : ''}`);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
  }, [searchQuery]);

  return (
    <div className="git">
      <img className="logo" src={logoGithub} alt="github logo" />
      <SearchBar
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onSubmitForm={setSearchQuery}
        isLoading={loading}
      />
      <Message message={message} />
      <Repos repos={repos} />
    </div>
  );
};

// Export
export default Github;
