import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ListIfNotLoginIn.css';

const ListIfNotLoginIn = () => {
  return (
    <div className="listIfNotLoginIn-container">
      <section className="Not-Login">
        <h2 className="Not-Login_title">Ups!</h2>
        <p>It looks like you are not registered.</p>
        <p>Login or create an account to create watch lists</p>
      </section>
      <section className="Not-Login_buttons center">
        <Link to="/user/" className="Not-Login_button_user">
          Login
        </Link>
        <Link to="/register/" className="Not-Login_button_register">
          Register
        </Link>
      </section>
    </div>
  );
};

export default ListIfNotLoginIn;
