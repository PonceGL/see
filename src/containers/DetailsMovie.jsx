import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import AddButton from '../components/AddButton';
import MoviePlayer from '../components/MoviePlayer';
import '../styles/containers/DetailsMovie.css';

const DetailsMovie = () => {
  window.scrollTo(0, 0);
  const {
    movies,
    currentUserSession,
    addWatchList,
    deleteFromWatchlist,
    isItOnMyList,
    myWatch,
  } = useContext(AppContext);
  const location = useLocation();
  const id = location.pathname.slice(1).split('/')[1];
  const MOVIE = movies.filter((movie) => movie.id === id);

  const handleClickAdd = () => {
    addWatchList(MOVIE[0]);
  };

  const handleClickRemove = () => {
    deleteFromWatchlist(MOVIE[0].id);
  };

  useEffect(() => {
    if (currentUserSession != '') {
      isItOnMyList(id);
    }
  }, [currentUserSession]);

  if (MOVIE.length === 0) {
    console.log('Aun no llegan las peliculas');
    return '...';
  } else {
    return (
      <main>
        <section className="Details-conatiner">
          <div className="Details-image_container center">
            <img className="Details-image" src={MOVIE[0].background} alt="" />
          </div>
          <div className="Details-info_container">
            <div className="Details-title_container">
              <h2 className="Details-title">{MOVIE[0].titles[0]}</h2>
              <h3 className="Details-Other-titles_title">Otros títulos</h3>
              <ol className="Details-Other_titles_container">
                {MOVIE[0].titles.map((title) => (
                  <li className="Details-Other_titles" key={title}>
                    {title}
                  </li>
                ))}
              </ol>
            </div>
            <ul className="Details-genders_container">
              {MOVIE[0].genders.map((gender) => (
                <li className="Details-gender" key={gender}>
                  {gender}
                </li>
              ))}
            </ul>
            <div className="Details-actionsAndInfo_container">
              {currentUserSession != '' ? (
                <AddButton
                  myWatch={myWatch}
                  handleClickRemove={handleClickRemove}
                  handleClickAdd={handleClickAdd}
                />
              ) : (
                <p>Inicia sesión para añadir a tu lista</p>
              )}
              <p className="Details-duration">{MOVIE[0].duration}</p>
              <p className="Details-year">{MOVIE[0].year}</p>
              <div className="Details-qualification">
                {MOVIE[0].qualification}
              </div>
            </div>
            <article className="Details-description">
              <p>{MOVIE[0].description}</p>
            </article>
          </div>
          <h3 className="Details-cast_title">Cast</h3>
          <div className="Details-cast">
            {MOVIE[0].cast.map((actor) => (
              <div className="Cast-info_container" key={actor.name}>
                <img src={actor.photo} alt={actor.photo} />
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        </section>
        {MOVIE[0].film != '' && (
          <section className="Details-moviePLayer_conatiner">
            <h2 className="Details-title">Ver ahora</h2>
            <MoviePlayer src={MOVIE[0].film} />
          </section>
        )}
      </main>
    );
  }
};

export default DetailsMovie;
