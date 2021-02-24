import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/containers/DetailsMovie.css';

const DetailsMovie = () => {
  const { movies } = useContext(AppContext);
  const id = window.location.pathname.slice(1).split('/')[1];
  let MOVIE;
  MOVIE = movies.filter((movie) => movie.id === id);
  console.log(movies);
  console.log(id);
  console.log(MOVIE);
  return (
    <main>
      <section className="Details-conatiner">
        <h2 className="Details-title">{MOVIE[0].titles[0]}</h2>
        <img className="Details-image" src={MOVIE[0].poster} alt="" />
      </section>
    </main>
  );
};

export default DetailsMovie;
