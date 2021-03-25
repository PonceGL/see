import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import GendersButtons from './GendersButtons';
import '../styles/components/Header.css';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <section className="Header-logoandsearch_container">
        <Logo />
        {location.pathname === '/' && <Search />}
      </section>
      <GendersButtons />
    </header>
  );
};

export default Header;
