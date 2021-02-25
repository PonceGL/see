import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import bookmark from '../assets/bookmark.svg';
import '../styles/containers/DetailsMovie.css';

const DetailsMovie = () => {
  const { movies } = useContext(AppContext);
  const location = useLocation();
  const id = location.pathname.slice(1).split('/')[1];
  let MOVIE;
  MOVIE = movies.filter((movie) => movie.id === id);
  console.log(MOVIE);
  return (
    <main>
      {MOVIE.length === 0 ? (
        console.log('aun no llegan las peliculas')
      ) : (
        <section className="Details-conatiner">
          <img
            className="Details-image"
            src={MOVIE[0].background}
            alt={MOVIE[0].background}
          />
          <div className="Details-info_container">
            <div className="Details-title_container">
              <h2 className="Details-title">{MOVIE[0].titles[0]}</h2>
              <h3 className="Details-Other-titles_title">Other titles</h3>
              {MOVIE[0].titles.map((title) => (
                <p className="Details-Other_titles" key={title}>
                  {title}
                </p>
              ))}
            </div>
            <div className="Details-actionsAndInfo_container">
              {MOVIE[0].genders.map((gender) => (
                <p className="Details-gender" key={gender}>
                  {gender}
                </p>
              ))}
            </div>
            <div className="Details-actionsAndInfo_container">
              <img
                className="Details-bookmark"
                src={bookmark}
                alt="Watc Liast Icon"
              />
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
              <div className="Cast-info_container center" key={actor.name}>
                <div className="Cast-info_image_container">
                  <img src={actor.photo} alt={actor.photo} />
                </div>
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default DetailsMovie;
