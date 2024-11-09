import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Outdoor Activity Recommendations</Text>
      <Text>Based on the current air quality, it is:</Text>
      <Text>- Safe for outdoor exercise.</Text>
      <Text>- Good for a walk in the park.</Text>
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
});

export default RecommendationsScreen;
