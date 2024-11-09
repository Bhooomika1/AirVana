import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    // Simulate fetching air quality data from an API
    fetchAirQualityData();
  }, []);

  const fetchAirQualityData = async () => {
    // Replace with real API call
    const data = {
      location: 'City Center',
      aqi: 75,
      status: 'Moderate',
      pollutants: {
        PM2.5: 35,
        CO2: 400,
      },
    };
    setAirQuality(data);
  };

  return (
    <View style={styles.container}>
      {airQuality ? (
        <>
          <Text style={styles.header}>Air Quality in {airQuality.location}</Text>
          <Text style={styles.aqi}>AQI: {airQuality.aqi} ({airQuality.status})</Text>
          <Text>PM2.5: {airQuality.pollutants['PM2.5']} µg/m³</Text>
          <Text>CO2: {airQuality.pollutants.CO2} ppm</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aqi: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default HomeScreen;
