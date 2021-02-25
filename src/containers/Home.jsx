import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Slider from '../components/Slider';
import Movies from '../components/Movies';

import '../styles/containers/Home.css';

const Home = () => {
  const { moviesSearch } = useContext(AppContext);

  const movies = moviesSearch.filter((gender, i) => {
    return moviesSearch.indexOf(gender) === i;
  });

  const moviesSlider = movies.slice(0, 5);
  const first = movies.slice(5, 15);
  const second = movies.slice(15, 25);
  const half = movies.length / 2;
  const firstHalf = movies.slice(0, half);
  const secondHalf = movies.slice(half);

  return (
    <main className="center">
      <Slider moviesSlider={moviesSlider} />
      <Movies films={first} title={'Popular'} />
      <Movies films={second} title={'Movies'} />
      <Movies films={firstHalf} title={'All Movies'} />
      <Movies films={secondHalf} title={''} />
    </main>
  );
};

export default Home;
