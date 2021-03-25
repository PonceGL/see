import React from 'react';

const MoviePlayer = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="85%"
      src={src}
      frameBorder="0"
      allowFullScreen="1"
    ></iframe>
  );
};

export default MoviePlayer;
