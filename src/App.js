import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import PieChart from './components/PieChart';
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';

// Import images
import background from './assets/background.png';
import background2 from './assets/background_2.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [airConcentrationData, setAirConcentrationData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchAirConcentrationData = () => {
      const sampleData = [400, 35, 50, 30, 25, 15];
      setAirConcentrationData(sampleData);
    };

    const fetchAlerts = () => {
      const sampleAlerts = [
        { type: 'High Ozone Levels', message: 'Ozone levels are dangerously high today.' },
        { type: 'Wildfire Smoke', message: 'Air quality may be affected by nearby wildfires.' },
      ];
      setAlerts(sampleAlerts);
    };

    const fetchCommunityPosts = () => {
      const samplePosts = [
        { user: 'Jane Doe', message: 'Noticed heavy traffic affecting air quality today.' },
        { user: 'John Smith', message: 'Community clean-up event this Saturday!' },
      ];
      setCommunityPosts(samplePosts);
    };

    const fetchReports = () => {
      const sampleReports = [
        { title: 'Monthly AQI Analysis', date: 'November 2024' },
        { title: 'Pollution Impact Study', date: 'October 2024' },
      ];
      setReports(sampleReports);
    };

    fetchAirConcentrationData();
    fetchAlerts();
    fetchCommunityPosts();
    fetchReports();
  }, []);

  // Define background styles for each section
  const backgroundStyles = {
    home: { backgroundImage: `url(${background2})` },
    community: { backgroundImage: `url(${background})` },
    reports: { backgroundImage: `url(${background})` },
    alerts: { backgroundImage: `url(${background2})` },
  };

  return (
    <div className="App" style={backgroundStyles[activeSection]}>
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
              <PieChart airConcentrationData={airConcentrationData} />
            </div>
          </div>
        )}

        {activeSection === 'alerts' && (
          <Card
            title="Alerts"
            icon={<FaBell />}
            content={
              <div>
                {alerts.map((alert, index) => (
                  <div key={index}>
                    <strong>{alert.type}</strong>
                    <p>{alert.message}</p>
                  </div>
                ))}
              </div>
            }
          />
        )}

        {activeSection === 'community' && (
          <Card
            title="Community"
            icon={<FaUsers />}
            content={
              <div>
                {communityPosts.map((post, index) => (
                  <div key={index}>
                    <strong>{post.user}</strong>
                    <p>{post.message}</p>
                  </div>
                ))}
                <a href="#community-forum">Join the Discussion</a>
              </div>
            }
          />
        )}

        {activeSection === 'reports' && (
          <Card
            title="Reports"
            icon={<FaChartBar />}
            content={
              <div>
                {reports.map((report, index) => (
                  <div key={index}>
                    <strong>{report.title}</strong>
                    <p>{report.date}</p>
                  </div>
                ))}
                <a href="#download-reports">Download Reports</a>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
