import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Great.css';

const Great = ({ name }) => {
  return (
    <section className="Great center">
      <div className="Great-card">
        <p className="Great-text">
          Great <span>{name}</span>!!! You have successfully registered.
        </p>
        <p className="Great-text">Now you can create watch list</p>
        <Link to="/" className="Start-button">
          Start
          <div className="register-glass"></div>
        </Link>
      </div>
    </section>
  );
};

export default Great;
