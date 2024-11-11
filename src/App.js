import React, { useState, useEffect } from 'react';
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';
import PieChart from './components/PieChart';

const chartData = {
  labels: ['CO2', 'PM2.5', 'PM10', 'O3', 'NO2', 'SO2'],
  datasets: [
    {
      data: [400, 35, 50, 30, 25, 15],
      backgroundColor: ['#FF6F61', '#FFD700', '#98FB98', '#87CEEB', '#9370DB', '#FFA500'],
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const sampleAlerts = [
      { type: 'High Ozone Levels', message: 'Ozone levels are dangerously high today.' },
      { type: 'Wildfire Smoke', message: 'Air quality may be affected by nearby wildfires.' },
    ];
    setAlerts(sampleAlerts);
  }, []);

  return (
    <div className={`App ${activeSection}-section`}>
      {/* Header Section */}
      <header className="header">
        {/* Log In and Sign In - Only on Landing Page */}
        {activeSection === 'landing' && (
          <nav className="auth-nav">
            <a href="#login" className="nav-link" onClick={() => setActiveSection('login')}>
              Log In
            </a>
            <a href="#signin" className="nav-link" onClick={() => setActiveSection('signin')}>
              Sign In
            </a>
          </nav>
        )}

        {/* Main Navigation */}
        <nav className="main-nav">
          <a href="#home" className="nav-link" onClick={() => setActiveSection('home')}>
            <FaHome /> HOME
          </a>
          <a href="#alerts" className="nav-link" onClick={() => setActiveSection('alerts')}>
            <FaBell /> ALERTS
          </a>
          <a href="#community" className="nav-link" onClick={() => setActiveSection('community')}>
            <FaUsers /> COMMUNITY
          </a>
          <a href="#report" className="nav-link" onClick={() => setActiveSection('report')}>
            <FaChartBar /> REPORT
          </a>
        </nav>
      </header>

      {/* Landing Page */}
      {activeSection === 'landing' && (
        <section className="hero-section">
          <div className="hero-content">
            <h1>AIRVANA</h1>
            <p className="subtitle">Sustainable Solutions for a Sustainable Planet</p>
            <h2>Air Quality Training</h2>
            <button className="cta-button" onClick={() => setActiveSection('home')}>
              Get Started
            </button>
            <p className="footer-text">Together, we can make a difference.</p>
          </div>
        </section>
      )}

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className="content">
          <div className="home-card">
            <h1 className="home-title">
              <FaHome /> HOME
            </h1>
            <div className="weather-info">
              <p>Weather in Your Location:</p>
              <p>Temperature: 27.99°C</p>
              <p>Weather: smoke</p>
            </div>
          </div>
          <div className="chart-section">
            <h2>Air Concentration Overview</h2>
            <PieChart data={chartData} width={300} height={300} />
          </div>
        </div>
      )}

      {/* Alerts Section */}
      {activeSection === 'alerts' && (
        <div className="alert-section">
          <div className="alert-card">
            <h1 className="alert-title">
              <FaBell /> ALERT
            </h1>
            <div className="alert-messages">
              {alerts.map((alert, index) => (
                <div key={index}>
                  <p><strong>{alert.type}</strong></p>
                  <p>{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="alert-images">
            <div className="alert-image-container">
              <img src="https://www.shutterstock.com/image-photo/air-pollution-chemical-industry-on-260nw-2471011119.jpg" alt="Pollution Image 1" className="alert-image" />
              <img src="https://media.istockphoto.com/id/167231386/photo/detail-of-white-smoke-polluted-sky.jpg?s=612x612&w=0&k=20&c=hExCnY1CN7xieBUcBTQ8h37TDLkSWCT06l8bbShbQvE=" alt="Pollution Image 2" className="alert-image" />
              <img src="https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9sbHV0aW9ufGVufDB8fDB8fHww" alt="Pollution Image 3" className="alert-image" />
            </div>
          </div>
        </div>
      )}

      {/* GIF Section */}
      {activeSection === 'landing' && (
        <div className="gif-container">
          <img src="https://cdn.dribbble.com/users/2517905/screenshots/15651749/media/e5595b1f647115b711652b8a40f0da90.gif" alt="tree GIF" />
        </div>
      )}
    </div>
  );
}

export default App;
