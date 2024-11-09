import React from 'react';
import './Header.css'; // Import your CSS file

const Header = ({ setActiveSection }) => {
  return (
    <header className="header">
      <h1>AirVana</h1>
      <nav className="navbar">
        <button onClick={() => setActiveSection('home')}>Home</button>
        <button onClick={() => setActiveSection('alerts')}>Alerts</button>
        <button onClick={() => setActiveSection('community')}>Community</button>
        <button onClick={() => setActiveSection('reports')}>Reports</button>
      </nav>
    </header>
  );
};

export default Header;

