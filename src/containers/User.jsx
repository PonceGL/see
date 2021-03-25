import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Profile from '../components/Profile';
import SignIn from '../components/SignIn';
import '../styles/containers/User.css';

const User = () => {
  const { currentUserSession } = useContext(AppContext);

  if (currentUserSession != '') {
    return (
      <main>
        <Profile name={currentUserSession.displayName} />
      </main>
    );
  } else {
    return (
      <main>
        <SignIn />
      </main>
    );
  }
};

export default User;
