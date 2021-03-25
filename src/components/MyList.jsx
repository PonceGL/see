import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/MyList.css';

const MyList = ({ watchList }) => {
  return (
    <>
      <section className="WatchList-title_container center">
        <h2 className="WatchList-title">Watch List</h2>
      </section>
      <section className="WatchList-movies_container">
        {watchList.map((movie) => (
          <Link
            to={'/details/' + movie.id}
            className="WatchList-movies"
            key={movie.id}
          >
            <img
              className="WatchList-movies_img"
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default MyList;
