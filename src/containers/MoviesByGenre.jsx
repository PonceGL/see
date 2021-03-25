import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/containers/MoviesByGenre.css';

const MoviesByGenre = () => {
  const { movies } = useContext(AppContext);
  const location = useLocation();
  const gender = location.pathname.slice(1).split('/')[1];
  const moviesByGenre = movies.filter((movie) =>
    movie.genders.includes(gender)
  );

  return (
    <main>
      <section className="Gender-title_container center">
        <h2 className="Gender-title">{gender}</h2>
      </section>
      <section className="Gender-movies_container">
        {moviesByGenre.map((movie) => (
          <Link
            to={'/details/' + movie.id}
            className="Gender-movies"
            key={movie.id}
          >
            <img
              className="Gender-movies_img"
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default MoviesByGenre;
