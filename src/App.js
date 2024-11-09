import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import PieChart from './components/PieChart'; // Import the PieChart component
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa'; // Import icons

function App() {
  const [airConcentrationData, setAirConcentrationData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [reports, setReports] = useState([]);

  // Simulated fetch for air concentration data
  useEffect(() => {
    const fetchAirConcentrationData = () => {
      // Example data for air concentration (CO2, PM2.5, PM10, O3, NO2, SO2)
      const sampleData = [400, 35, 50, 30, 25, 15];
      setAirConcentrationData(sampleData);
    };

    const fetchAlerts = () => {
      // Example alerts data
      const sampleAlerts = [
        { type: 'High Ozone Levels', message: 'Ozone levels are dangerously high today.' },
        { type: 'Wildfire Smoke', message: 'Air quality may be affected by nearby wildfires.' },
      ];
      setAlerts(sampleAlerts);
    };

    const fetchCommunityPosts = () => {
      // Example community posts
      const samplePosts = [
        { user: 'Jane Doe', message: 'Noticed heavy traffic affecting air quality today.' },
        { user: 'John Smith', message: 'Community clean-up event this Saturday!' },
      ];
      setCommunityPosts(samplePosts);
    };

    const fetchReports = () => {
      // Example reports data
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

  return (
    <div className="App">
      <Header />
      <Hero />

      <div className="dashboard">
        <Card
          title="Home"
          icon={<FaHome />}
          content={
            <div>
              <p>Current AQI: 75 (Moderate)</p>
              <p>Temperature: 22°C</p>
              <p>Humidity: 60%</p>
              <a href="#learn-more">Learn More</a>
            </div>
          }
        />
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
      </div>

      <div className="chart-section">
        <h2>Air Concentration Overview</h2>
        <PieChart airConcentrationData={airConcentrationData} />

      </div>
    </div>
  );
}

export default App;
