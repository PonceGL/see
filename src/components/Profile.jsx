import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import ModalDeleteAccount from '../components/ModalDeleteAccount';
import '../styles/components/Profile.css';

const Profile = ({ name }) => {
  const { userPhotoSession, Logaut, deleteUser } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="user-container">
      <section className="Profile-image_container">
        {userPhotoSession != null ? (
          <img
            className="Profile-photo"
            src={userPhotoSession}
            alt="Foto de perfil de usuario"
          />
        ) : (
          <img
            className="Profile-avatar"
            src="https://firebasestorage.googleapis.com/v0/b/see-films.appspot.com/o/brand%2Favatar.svg?alt=media&token=a9af5c3c-1ccd-446e-9d78-58b77b3ce7d1"
            alt="Foto avatar por defecto"
          />
        )}
        <h3 className="Profile-nameUser">{name}</h3>
      </section>
      <section className="Actions">
        <Link className="Actions-watchlist_link" to="/watchlist/">
          <div className="Actions-watchlist_container">My Watch List</div>
        </Link>
        <button className="Actions-logout" type="button" onClick={Logaut}>
          Log out
        </button>
      </section>
      <section className="DeleteAccount-container center">
        <button
          className="DeleteAccount-button"
          type="button"
          onClick={handleOpen}
        >
          Delete my account
        </button>
      </section>
      <ModalDeleteAccount isOpen={isOpen} handleClose={handleClose}>
        <h3 className="Modal-title">Delete your account?</h3>
        <div className="Modal-buttons_container">
          <button
            className="Modal-button yes"
            type="button"
            onClick={deleteUser}
          >
            Yes
          </button>
          <button
            className="Modal-button no"
            type="button"
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </ModalDeleteAccount>
    </div>
  );
};

export default Profile;
