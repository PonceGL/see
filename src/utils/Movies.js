import { useEffect, useState } from 'react';
const URL = 'https://see-films-default-rtdb.firebaseio.com/movies.json';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMovies(data);
  }, []);

  return { movies };
};

export default Movies;
