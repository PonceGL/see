import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Search.css';

const Search = () => {
  const { query, search } = useContext(AppContext);
  return (
    <div className="Header_search-container">
      <form id="form-search">
        <label htmlFor="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
