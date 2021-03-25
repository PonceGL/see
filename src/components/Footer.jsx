import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Footer.css';

const Footer = () => {
  const { resetFocusButtons } = useContext(AppContext);

  return (
    <footer>
      <Link to="/" onClick={resetFocusButtons}>
        <img
          className="Footer-icon"
          src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Ffilm.svg?alt=media&token=5b53fc2c-426c-4a60-942f-c34f1fba8a06"
          alt="film icon"
        />
      </Link>
      <Link to="/watchlist/" onClick={resetFocusButtons}>
        <img
          className="Footer-icon"
          src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Fbookmark.svg?alt=media&token=84e4e49e-a3d0-4b60-bcf3-8b6cb38e8fd6"
          alt="bookmark icon"
        />
      </Link>
      <Link to="/user/" onClick={resetFocusButtons}>
        <img
          className="Footer-icon"
          src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Fuser.svg?alt=media&token=b8a2298c-3e17-4750-8999-b1e1fc349200"
          alt="user icon"
        />
      </Link>
    </footer>
  );
};

export default Footer;
