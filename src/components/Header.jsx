import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { query, search, genders } = useContext(AppContext);

  return (
    <header>
      <section className="Header-logoandsearch_container">
        <Link to="/" className="Header_logo-container">
          <h1>
            <span className="square center squareOne">s</span>
            <span className="square center squareTwo">e</span>
            <span className="square center squareTree">e</span>
          </h1>
        </Link>
        <div className="Header_search-container">
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
        </div>
      </section>
      <section className="Header-genders_container">
        {genders.map((gender) => (
          <button type="button" key={gender}>
            {gender}
          </button>
        ))}
      </section>
    </header>
  );
};

export default Header;
