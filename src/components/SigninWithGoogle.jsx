import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/SigninWithGoogle.css';

const SigninWithGoogle = () => {
  const { registerWithGoogle } = useContext(AppContext);

  return (
    <section className="Sign-in-with-Google-container">
      <button
        className="Sign-in-with-Google-button"
        id="Sign-in-with-Google-button"
        type="button"
        onClick={() => registerWithGoogle()}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Fgoogle.svg?alt=media&token=dda8014c-f5bc-4fad-a966-5f40c2c9e2c0"
          alt="Icono de Google, para iniciar secion cun google"
          className="Sign-in-with-Google-icon"
        />
        Sign in with your Google account
      </button>
    </section>
  );
};

export default SigninWithGoogle;
