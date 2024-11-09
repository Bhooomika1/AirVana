import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Air Quality Tracking</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#alerts">Alerts</a>
        <a href="#community">Community</a>
        <a href="#reports">Reports</a>
      </nav>
    </header>
  );
};

export default Header;
