// Import npm
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import data
import './style.scss';

// Component
const SearchBar = () => {
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({
      query,
      loading: true,
      message: '',
    })
  };


  const loadResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };
   
  useEffect(()=> {
    loadResults();
  }, []);


  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.legnth) {
      return (
        <div className="results__container">
          {results.map((result) => (
            <a key={result.id} href={result.url} className="results__item">
              <article className="card">
                <img className="card__image" src={result.owner.avatar_url} alt="logo" />
                <h2 className="card__title">{result.name}</h2>
                <h3 className="card__subtitle">{result.full_name}</h3>
                <p className="card__text">{result.description}</p>
              </article>
            </a>
          ))}
        </div>
      );
    };
  }

  return (
    const { query } = this.state;

    return (
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={query}
            id="search-input"
            placeholder="Search ..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label>
        {this.renderSearchResults()}
      </div>
    );

  )
};

// Export
export default SearchBar;
