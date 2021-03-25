import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import view from '../assets/view.svg';
import ErrorMesage from './ErrorMesage';
import SigninWithGoogle from './SigninWithGoogle';
import '../styles/components/RegisterForm.css';

const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { register, errorRegisterMessage } = useContext(AppContext);
  const formRegister = useRef(null);

  //validate password
  const [errorName, setErrorName] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorLengthPassword, setErrorLengthPassword] = useState(true);
  const [errorSpacesPassword, setErrorSpacesPassword] = useState(true);
  const [errorDifferentPasswords, setErrorDifferentPasswords] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRegister.current);
    // prettier-ignore
    const newUser = {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'password': formData.get('password'),
      };
    register(newUser);
  };

  const handleChangeName = (value) => {
    setUserName(value);
    if (value.length < 3) {
      setErrorName(false);
    } else {
      setErrorName(true);
    }
  };

  const handleChangeEmail = (value) => {
    const badEmails = [
      '@correo',
      '@prueba',
      '@ejemplo',
      '@asd',
      '@facebook',
      '123',
      'abcd',
      'qwerty',
    ];
    setUserEmail(value);

    if (value.includes('@') && value.includes('.com')) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleChangePassword = (value) => {
    setUserPassword(value);
    if (value.includes(' ')) {
      setErrorSpacesPassword(false);
    } else {
      setErrorSpacesPassword(true);
    }

    if (value.length < 6) {
      setErrorLengthPassword(false);
    } else {
      setErrorLengthPassword(true);
    }
    handleConfirmPassword(confirmPassword);
  };

  const handleConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (userPassword === value) {
      setErrorDifferentPasswords(true);
    } else {
      setErrorDifferentPasswords(false);
    }
  };

  return (
    <div className="register-container">
      <section className="Register-title">
        <h2>Register</h2>
      </section>
      <section className="Form-register_container center">
        <form
          ref={formRegister}
          onSubmit={handleSubmit}
          className="Form-register center"
          id="FormRegister"
        >
          {!errorName && (
            <ErrorMesage>
              <p className="mesage">
                The name must be at least 3 characters long
              </p>
            </ErrorMesage>
          )}
          <label htmlFor="name" className="Form-label">
            Name
            <input
              type="text"
              id="name"
              name="name"
              className="input-name"
              minLength="3"
              required
              value={userName}
              onChange={(e) => {
                handleChangeName(e.target.value);
              }}
            />
          </label>
          {!errorEmail && (
            <ErrorMesage>
              <p className="mesage">The e-mail address is incorrect</p>
            </ErrorMesage>
          )}
          <label htmlFor="email" className="Form-label">
            Email
            <input
              type="email"
              name="email"
              id="email"
              required
              value={userEmail}
              onChange={(e) => {
                handleChangeEmail(e.target.value);
              }}
            />
          </label>
          {!errorLengthPassword && (
            <ErrorMesage>
              <p className="mesage">
                The password must be at least 6 characters long
              </p>
            </ErrorMesage>
          )}
          {!errorSpacesPassword && (
            <ErrorMesage>
              <p className="mesage">Password cannot contain blank spaces</p>
            </ErrorMesage>
          )}
          <label htmlFor="password" className="Form-label label-password">
            Password
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="mainPassword"
              minLength="6"
              placeholder="Enter min 6 characters"
              required
              value={userPassword}
              onChange={(e) => {
                handleChangePassword(e.target.value);
              }}
            />
            <span className="view-password center" onClick={handleShowPassword}>
              <img src={view} alt="Icono para mostrar password" />
            </span>
          </label>
          {!errorDifferentPasswords && (
            <ErrorMesage>
              <p className="mesage">The passwords are different</p>
            </ErrorMesage>
          )}
          <label htmlFor="password" className="Form-label label-password">
            Confirm Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => {
                handleConfirmPassword(e.target.value);
              }}
            />
          </label>
          {errorRegisterMessage != '' && (
            <ErrorMesage>
              <p className="mesage">{errorRegisterMessage}</p>
            </ErrorMesage>
          )}
          <button className="button-regiter" id="button-regiter" type="submit">
            Register
            <div className="register-glass"></div>
          </button>
        </form>
      </section>
      <SigninWithGoogle />
      <section className="OrSignIn-container center">
        <p className="OrSignIn">Or Sign in</p>
        <Link to="/user" className="OrSignIn-button">
          Sign in
        </Link>
      </section>
    </div>
  );
};

export default RegisterForm;
