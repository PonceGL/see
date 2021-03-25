import { useEffect, useState } from 'react';
import FirebaseApp from '../utils/FirebaseApp';
const URL = 'https://see-films-default-rtdb.firebaseio.com/movies.json';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const {
    currentUserSession,
    userPhotoSession,
    setCurrentUserSession,
    register,
    errorRegisterMessage,
    signin,
    errorSignMessage,
    registerWithGoogle,
    getWatchList,
    Logaut,
    deleteUser,
    watchList,
    addWatchList,
    deleteFromWatchlist,
    isItOnMyList,
    myWatch,
  } = FirebaseApp();

  useEffect(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMovies(data);
  }, []);

  //Search
  const search = (value) => {
    let titles = document.querySelectorAll('.Movies-title');
    let slider = document.querySelectorAll('.slider-container');
    setQuery(value);
    if (value.length > 0) {
      titles.forEach((title) => (title.style.display = 'none'));
      slider.forEach((title) => (title.style.display = 'none'));
    }
  };

  const moviesSearch = [];
  const filtrar = (movie) => {
    movie.titles.map((title) => {
      if (title.toLowerCase().includes(query.toLocaleLowerCase())) {
        moviesSearch.push(movie);
      }
    });
  };
  movies.filter(filtrar);

  //Get list of genres without repeats
  const allGenders = [];
  const allArrayGenders = movies.map((movie) =>
    movie.genders.map((gender) => gender)
  );

  allArrayGenders.map((generofthemovie) =>
    generofthemovie.map((gender) => allGenders.push(gender))
  );
  const genders = allGenders.filter((gender, i) => {
    return allGenders.indexOf(gender) === i;
  });

  //Remove yellow color from the buttons generators

  const resetFocusButtons = () => {
    const buttons = document.querySelectorAll('.genders-buttons');
    buttons.forEach((button) => button.classList.remove('focus'));
  };

  return {
    movies,
    query,
    search,
    moviesSearch,
    genders,
    resetFocusButtons,
    currentUserSession,
    userPhotoSession,
    setCurrentUserSession,
    register,
    errorRegisterMessage,
    signin,
    errorSignMessage,
    registerWithGoogle,
    getWatchList,
    Logaut,
    deleteUser,
    watchList,
    addWatchList,
    deleteFromWatchlist,
    isItOnMyList,
    myWatch,
  };
};

export default Movies;
