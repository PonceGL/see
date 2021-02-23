import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/containers/Home.css';

const Home = () => {
  const { movies } = useContext(AppContext);

  return (
    <main className="center">
      <div className="Home-container center" id="Home-container">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.titles[0]}</p>
        ))}
      </div>
    </main>
  );
};

export default Home;
