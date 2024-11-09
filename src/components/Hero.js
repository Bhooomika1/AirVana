import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/background.png';

import WeatherWithLocation from './WeatherWithLocation';

const Hero = () => {
  return (
    <section className="hero" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Adjust height based on your design
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    }}>
      <div className="hero-content">
        <h1>AirVana</h1>
        <p>Air Quality Tracking</p>
        <WeatherWithLocation />
        {/* <div className="aqi-info">
          <div className="aqi-value">39</div>
          <div className="condition">Good</div>
        </div> */}
      </div>
      <div className="graph">
        {/* Placeholder for Graph or Chart */}
      </div>
    </section>
  );
};

export default Hero;
