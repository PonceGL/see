import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import user from '../assets/user.svg';
import '../styles/containers/User.css';

const User = () => {
  const { nameUser } = useContext(AppContext);
  console.log(nameUser);

  if (nameUser != null) {
    return (
      <main>
        <section className="Profile-image_container">
          <img className="Profile-image" src={user} alt="" />
          <h3>{nameUser}</h3>
        </section>
        <section className="Actions">
          <div className="Actions-watchlist_container">
            <Link className="Actions-watchlist" to="/">
              My Watch List
            </Link>
          </div>
          <button className="Actions-logout" type="button">
            Log out
          </button>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="Register-title">
          <h2>Sign in</h2>
        </section>
        <section className="Form-container center">
          <form action="" className="Form center">
            <label htmlFor="email" className="Form-label">
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password" className="Form-label">
              Password
              <input type="password" name="password" id="password" />
            </label>
            <button className="button-regiter" type="submit">
              Sign in
              <div className="register-glass"></div>
            </button>
          </form>
        </section>
        <section className="OrRegister-container center">
          <p className="OrRegister">Or register</p>
          <Link to="/register/" className="OrRegister-button">
            Register
          </Link>
        </section>
      </main>
    );
  }
};

export default User;

//Profile

{
  /* <section className="Profile-image_container">
<img className="Profile-image" src={user} alt="" />
</section>
<section className="Actions">
<div className="Actions-watchlist_container">
    <Link className="Actions-watchlist" to="/">
    My Watch List
    </Link>
</div>
<button className="Actions-logout" type="button">
    Log out
</button>
</section> */
}

//Gegister

{
  /* <section className="Register-title">
<h2>Register</h2>
</section>
<section className="Form-container center">
<form action="" className="Form center">
    <label htmlFor="name" className="Form-label">
    Name
    <input type="text" id="name" name="name" />
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
</section> */
}
