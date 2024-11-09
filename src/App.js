import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import PieChart from './components/PieChart'; // Import the PieChart component
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';

const chartData = {
  labels: ['CO2', 'PM2.5', 'PM10', 'O3', 'NO2', 'SO2'],
  datasets: [
    {
      data: [400, 35, 50, 30, 25, 15], // Your data values
      backgroundColor: [
        '#FF6F61', // CO2
        '#FFD700', // PM2.5
        '#98FB98', // PM10
        '#87CEEB', // O3
        '#9370DB', // NO2
        '#FFA500', // SO2
      ],
      borderColor: '#FFFFFF', // White borders to make slices stand out
      borderWidth: 2,
    },
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [alerts, setAlerts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
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

    fetchAlerts();
    fetchCommunityPosts();
    fetchReports();
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
