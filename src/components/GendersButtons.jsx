import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/GendersButtons.css';

const GendersButtons = () => {
  const { genders } = useContext(AppContext);

  const handleClick = (e) => {
    const button = e.target;
    const buttons = document.querySelectorAll('.genders-buttons');
    buttons.forEach((button) => button.classList.remove('focus'));
    button.classList.add('focus');
  };

  return (
    <section className="Header-genders_container">
      {genders.map((gender) => (
        <Link
          to={'/gender/' + gender}
          key={gender}
          className="genders-buttons"
          onClick={handleClick}
        >
          {gender}
        </Link>
      ))}
    </section>
  );
};

export default GendersButtons;
