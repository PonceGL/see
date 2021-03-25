import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import estrella from '../assets/estrella.svg';
import '../styles/components/Movies.css';

const Movies = ({ films, title }) => {
  const { search } = useContext(AppContext);
  const qualificationOnStars = (qualification) => {
    let stars = [];
    for (let i = 0; i < Math.round(qualification) - 4; i++) {
      stars.push('star' + i);
    }
    return stars;
  };

  return (
    <section className="Movies">
      {films.length > 0 ? <h2 className="Movies-title">{title}</h2> : ''}
      <div className="Movies-container">
        {films.map((movie, i) => (
          <figure className="Movies-figure" key={'Movies-image' + i}>
            <Link to={'/details/' + movie.id} className="Movies-link">
              <img
                className="Movies-image"
                src={movie.poster}
                alt={movie.titles[0]}
                loading="lazy"
                onClick={() => {
                  search('');
                }}
              />
            </Link>
            <figcaption className="Movies-caption">
              <div className="Movies-caption_title_container">
                <p>{movie.titles[0]}</p>
              </div>
              <div className="Movies-caption_starandqualification_container">
                <div className="Movies-caption_star_container">
                  {qualificationOnStars(movie.qualification).map((star) => (
                    <img
                      key={'star' + star}
                      className="Movies-caption_star"
                      src={estrella}
                      alt="star"
                    />
                  ))}
                </div>
                <div className="Movies-caption_qualification_container">
                  {movie.qualification}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Movies;
