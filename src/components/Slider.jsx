import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Slider.css';

const Slider = ({ moviesSlider }) => {
  return (
    <section className="slider-container" id="slider-container">
      {moviesSlider.map((movie, i) => (
        <figure className="slider-figure" key={'slider-image' + i}>
          <Link to={'/details/' + movie.id} className="slider-link">
            <img
              className="slider-image"
              src={movie.background}
              alt={movie.titles[0]}
            />
          </Link>
          <figcaption className="slider-caption">{movie.titles[0]}</figcaption>
        </figure>
      ))}
    </section>
  );
};

export default Slider;
