import React from 'react';
import { Link } from 'react-router-dom';
import film from '../assets/film.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/user.svg';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img className="Footer-icon" src={film} alt="film icon" />
      </Link>
      <Link to="/">
        <img className="Footer-icon" src={bookmark} alt="bookmark icon" />
      </Link>
      <Link to="/">
        <img className="Footer-icon" src={user} alt="user icon" />
      </Link>
    </footer>
  );
};

export default Footer;
