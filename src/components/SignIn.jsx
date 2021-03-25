import React, { useRef, useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import ErrorMesage from './ErrorMesage';
import SigninWithGoogle from './SigninWithGoogle';
import '../styles/components/SignIn.css';

const SignIn = () => {
  const { signin, errorSignMessage } = useContext(AppContext);
  const formSignin = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formSignin.current);
    //prettier-ignore
    const userSignin = {
        "email": formData.get("email"),
        "password": formData.get("password")
      }
    signin(userSignin);
  };

  return (
    <div className="signin-container">
      <section className="SignIn-title">
        <h2>Sign in</h2>
      </section>
      <section className="Form-SignIn_container center">
        <form
          ref={formSignin}
          onSubmit={handleSubmit}
          className="Form-SignIn center"
          id="formSignin"
        >
          <label htmlFor="email" className="Form-label">
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password" className="Form-label">
            Password
            <input type="password" name="password" id="password" />
          </label>
          {errorSignMessage != '' && (
            <ErrorMesage>
              <p className="mesage">{errorSignMessage}</p>
            </ErrorMesage>
          )}
          <button className="button-SignIn" type="submit">
            Sign in
            <div className="register-SignIn"></div>
          </button>
        </form>
      </section>
      <SigninWithGoogle />
      <section className="OrRegister-container center">
        <p className="OrRegister">Or register</p>
        <Link to="/register/" className="OrRegister-button">
          Register
        </Link>
      </section>
    </div>
  );
};

export default SignIn;
