import React from 'react';
import ReactDOM from 'react-dom';
import close from '../assets/close.svg';
import '../styles/components/ModalDeleteAccount.css';

const ModalDeleteAccount = ({ isOpen, children, handleClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal-background center">
      <div className="Modal-container">
        <div className="Modal-header">
          <button className="Modal-button-close center" onClick={handleClose}>
            <img src={close} alt="Boton para cerrar modal" />
          </button>
        </div>
        <div className="Modal-main">{children}</div>
        <div className="Modal-footer"></div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ModalDeleteAccount;
