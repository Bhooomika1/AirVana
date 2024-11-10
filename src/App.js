import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import PieChart from './components/PieChart';
import ParallaxSection from './components/ParallaxSection';
import './App.css';
import { FaHome, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

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
  const communityPosts = []; // Example: replace with actual data
  const reports = []; // Example: replace with actual data

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
    <ParallaxProvider>
      <div className={`App ${activeSection}-section`}>
        <div className="app-container">
          <Header setActiveSection={setActiveSection} />
          <Hero />
        </div>

        <div className="content">
          {activeSection === 'home' && (
            <ParallaxSection id="section1" image="assets/background.png">
              <div className="home-card slide-in-left">
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
            </ParallaxSection>
          )}

          {activeSection === 'alerts' && (
            <ParallaxSection id="section2" image="assets/background_2.png">
              <Card
                title="Alerts"
                icon={<FaBell />}
                content={
                  <div className="alert-messages">
                    {alerts.map((alert, index) => (
                      <div key={index}>
                        <p><strong>{alert.type}</strong></p>
                        <p>{alert.message}</p>
                      </div>
                    ))}
                  </div>
                }
              />
              <div className="alert-images">
                <img src="/assets/pollution.png" alt="Pollution Image 1" />
                <img src="/assets/pollution_1.png" alt="Pollution Image 2" />
                <img src="/assets/pollution_3.png" alt="Pollution Image 3" />
              </div>
            </ParallaxSection>
          )}

          {activeSection === 'community' && (
            <ParallaxSection id="section3" image="assets/background_2.png">
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
                    <a href="#community-forum" style={{ display: 'block', marginTop: '10px' }}>
                      Join the Discussion
                    </a>
                  </div>
                }
              />
            </ParallaxSection>
          )}

          {activeSection === 'reports' && (
            <ParallaxSection id="section4" image="assets/background.png">
              <Card
                title="Reports"
                icon={<FaChartBar />}
                content={
                  <div>
                    <ScrollMenu>
                      {reports.map((report, index) => (
                        <div key={index} style={{ margin: '0 10px' }}>
                          <strong>{report.title}</strong>
                          <p>{report.date}</p>
                        </div>
                      ))}
                    </ScrollMenu>
                    <a href="#download-reports" style={{ display: 'block', marginTop: '10px' }}>
                      Download Reports
                    </a>
                  </div>
                }
              />
            </ParallaxSection>
          )}
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
