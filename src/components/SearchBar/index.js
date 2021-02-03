// Import npm
import React from 'react';
import axios from 'axios';

// Import data
import './style.scss';

// Component
class SearchBar extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
  }

  fetchSearchResults = (updatedPageNo = '', query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
    const searchUrl = `https://api.github.com/search/repositories?q=${query}${pageNumber}`;
    axios.get(searchUrl)
      .then((response) => {
        const resultNotFoundMsg = !response.data.items.length ? 'no more search results' : '';
        this.setState({
          results: response.data.items,
          message: resultNotFoundMsg,
          currentPageNo: updatedPageNo,
          loading: false,
        });
      }).catch((error) => {
        console.log(error);
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: '' });
    }
    else {
      this.setState({ query, loading: true, message: '' }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  // eslint-disable-next-line consistent-return
  renderSearchResults = () => {
    const { results } = this.state;

    if (results.length) {
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
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
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
  }
}

// Export
export default SearchBar;
