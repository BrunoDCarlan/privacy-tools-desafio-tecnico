import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/themecontext';
import '../styles/header.css';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__logo">🎬 Filmoteca</div>
      <nav className="header__nav">
        <NavLink to="/" end className="header__link">
          Início
        </NavLink>
        <NavLink to="/busca" className="header__link">
          Busca
        </NavLink>
        <NavLink to="/favoritos" className="header__link">
          Favoritos
        </NavLink>
      </nav>
      <button
        className="header__theme-toggle"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}