import React from 'react';
import '../styles/components/EmptyList.css';

const EmptyList = ({ name }) => {
  return (
    <div className="emptylist-container">
      <section className="WatchList-title_container center">
        <h2 className="WatchList-title">Watch List</h2>
      </section>
      <section className="EmptyList-container">
        <p>
          <span>{name}</span> you still don't have anything on your list
        </p>
      </section>
    </div>
  );
};

export default EmptyList;
