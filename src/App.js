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

  return (
    <ParallaxProvider>
      <div className={`App ${activeSection}-section`}>
        <div className="app-container">
          <Header setActiveSection={setActiveSection} />
          <Hero />
        </div>

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
          <div className="chart-section slide-in-right">
            <h2>Air Concentration Overview</h2>
            <PieChart airConcentrationData={airConcentrationData} />
          </div>
        </ParallaxSection>

        <ParallaxSection id="section2" image="assets/background_2.png">
          <Card
            title="Alerts"
            icon={<FaBell />}
            content={
              <div className="slide-in-left">
                {alerts.map((alert, index) => (
                  <div key={index}>
                    <strong>{alert.type}</strong>
                    <p>{alert.message}</p>
                  </div>
                ))}
              </div>
            }
          />
        </ParallaxSection>

        <ParallaxSection id="section3" image="assets/background_2.png">
          <Card
            title="Community"
            icon={<FaUsers />}
            content={
              <div className="slide-in-right">
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
      </div>
    </ParallaxProvider>
  );
}

export default App;
