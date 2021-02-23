import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { movies } = useContext(AppContext);
  console.log(movies);

  return (
    <header>
      <section className="Header-logoandsearch_container">
        <Link to="/" className="Header_logo-container">
          <div className="square center squareOne">s</div>
          <div className="square center squareTwo">e</div>
          <div className="square center squareTree">e</div>
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
        <button>
          <Link className="Header-genders_link" to="/">
            Acción
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Aventura
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Triler
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Acción
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Aventura
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Triler
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Acción
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Aventura
          </Link>
        </button>
        <button>
          <Link className="Header-genders_link" to="/">
            Triler
          </Link>
        </button>
      </section>
    </header>
  );
};

export default Header;
