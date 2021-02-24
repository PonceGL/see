import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { movies } = useContext(AppContext);
  /*  console.log(movies); */

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
            />
          </label>
        </div>
      </section>
      <section className="Header-genders_container">
        <button type="button">Acción</button>
        <button type="button">Aventura</button>
        <button type="button">Triler</button>
        <button type="button">Acción</button>
        <button type="button">Aventura</button>
        <button type="button">Triler</button>
        <button type="button">Acción</button>
        <button type="button">Aventura</button>
        <button type="button">Triler</button>
      </section>
    </header>
  );
};

export default Header;
