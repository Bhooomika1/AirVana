import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AirVana</h1>
        <p>Air Quality Tracking</p>
        <div className="aqi-info">
          <div className="aqi-value">39</div>
          <div className="condition">Good</div>
        </div>
      </div>
      <div className="graph">
        {/* Placeholder for Graph or Chart */}
      </div>
    </section>
  );
};

export default Hero;
