import React, { useState, useEffect } from 'react';

const WeatherWithLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; // Your OpenWeather API key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // Fetch weather data using the coordinates
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Log the API response to inspect it
          if (data.cod === 200 && data.main && data.weather) {
            // Check for a successful response (cod === 200)
            setWeatherData(data);
          } else {
            setError(`Failed to load weather data: ${data.message || 'Unknown error'}`);
          }
        })
        .catch((error) => setError(`Error fetching data: ${error.message}`));
    }
  }, [location, API_KEY]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : weatherData ? (
        <div>
          <h2>Weather in Your Location:</h2>
          <p>Temperature: {weatherData.main?.temp}°C</p>
          <p>Weather: {weatherData.weather[0]?.description}</p>
        </div>
      ) : (
        <p>Fetching your location and weather data...</p>
      )}
    </div>
  );
};

export default WeatherWithLocation;
