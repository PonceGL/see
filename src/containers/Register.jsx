import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Great from '../components/Great';
import RegisterForm from '../components/RegisterForm';
import '../styles/containers/User.css';

const Register = () => {
  const { currentUserSession } = useContext(AppContext);

  if (currentUserSession != '') {
    return (
      <main>
        <Great name={currentUserSession.displayName} />
      </main>
    );
  } else {
    return (
      <main>
        <RegisterForm />
      </main>
    );
  }
};

export default Register;
