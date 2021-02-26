import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/containers/User.css';

const Register = () => {
  const { register } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    // prettier-ignore
    const newUser = {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'password': formData.get('password'),
      };
    register(newUser);
    history.push('/user/');
  };

  return (
    <main>
      <section className="Register-title">
        <h2>Register</h2>
      </section>
      <section className="Form-container center">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="Form center"
          id="FormRegister"
        >
          <label htmlFor="name" className="Form-label">
            Name
            <input type="text" id="name" name="name" className="input-name" />
          </label>
          <label htmlFor="email" className="Form-label">
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password" className="Form-label">
            Password
            <input type="password" name="password" id="password" />
          </label>
          <button className="button-regiter" type="submit">
            Register
            <div className="register-glass"></div>
          </button>
        </form>
      </section>
      <section className="OrRegister-container center">
        <p className="OrRegister">Or Sign in</p>
        <Link to="/user" className="OrRegister-button">
          Sign in
        </Link>
      </section>
    </main>
  );
};

export default Register;
