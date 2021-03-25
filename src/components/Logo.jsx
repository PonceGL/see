import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Logo.css';

const Logo = () => {
  const { resetFocusButtons } = useContext(AppContext);

  return (
    <Link to="/" className="Header_logo-container" onClick={resetFocusButtons}>
      <h1>
        <span className="square center squareOne">s</span>
        <span className="square center squareTwo">e</span>
        <span className="square center squareTree">e</span>
      </h1>
    </Link>
  );
};

export default Logo;
