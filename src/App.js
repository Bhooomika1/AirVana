import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';



function App() {
  return (
    <div className="App">
       
      <Header />
      <Hero />
      <div className="dashboard">
     
        <Card title="Home" content={<p>Graph or Data</p>} />
        <Card title="Alerts" content={<p>Alerts Data</p>} />
        <Card title="Community" content={<p>Community Info</p>} />
        <Card title="Reports" content={<p>Reports and Analysis</p>} />
      </div>
    </div>
  );
}

export default App;
