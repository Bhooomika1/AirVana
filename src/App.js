import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import PieChart from './components/PieChart'; 
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';

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
  const [activeSection, setActiveSection] = useState('home');
  const [alerts, setAlerts] = useState([]);
  
  useEffect(() => {
    const fetchAlerts = () => {
      const sampleAlerts = [
        { type: 'High Ozone Levels', message: 'Ozone levels are dangerously high today.' },
        { type: 'Wildfire Smoke', message: 'Air quality may be affected by nearby wildfires.' },
      ];
      setAlerts(sampleAlerts);
    };

    fetchAlerts();
  }, []);

  return (
    <div className={`App ${activeSection}-section`}>
      <div className="app-container">
        <Header setActiveSection={setActiveSection} />
        <Hero />
      </div>
      <div className="content">
        {activeSection === 'home' && (
          <div>
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
            <img src="/assets/pollution.png" alt="Pollution Image 1" />
            <img src="/assets/pollution_1.png" alt="Pollution Image 2" />
            <img src="/assets/pollution_3.png" alt="Pollution Image 3" />
            </div>
          </div>
        )}
        
        {/* Other sections like Community and Reports */}
      </div>
    </div>
  );
}

export default App;
