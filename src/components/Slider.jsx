import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Slider.css';

const Slider = ({ moviesSlider }) => {
  const Slider = useRef(null);

  const rearrangement = () => {
    const firstChild = Slider.current.children[0];
    Slider.current.style.transition = 'none';
    Slider.current.style.transform = `translateX(0)`;
    Slider.current.appendChild(firstChild);
  };

  const transition = () => {};

  const next = () => {
    if (Slider.current.children.length > 0) {
      const scroll = Slider.current.children[0].offsetWidth;
      Slider.current.style.transition = 'ease-in-out 300ms all';
      Slider.current.style.transform = `translateX(-${scroll + 10}px)`;

      Slider.current.addEventListener('transitionend', rearrangement);
    }
  };

  useEffect(() => {
    const sliderAnimation = setInterval(() => {
      next();
    }, 5000);
    return () => {
      clearInterval(sliderAnimation);
    };
  }, []);

  return (
    <>
      <section className="slider-container" ref={Slider}>
        {moviesSlider.map((movie) => (
          <div className="slider-item_container" key={movie.id}>
            <Link to={'/details/' + movie.id}>
              <img className="slider-image" src={movie.background} alt="" />
              <p className="slider-title">
                <span>{movie.titles[0]}</span>
              </p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Slider;
