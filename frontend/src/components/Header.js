import React from 'react';
import '../styles/Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>Seungchan An</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button 
              className="dark-mode-toggle" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
