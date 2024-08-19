// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Man Cave, buda boss, kwani si ni wanawake!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default HomeScreen;

// src/screens/ProfileScreen.tsx and src/screens/SettingsScreen.tsx
// Create similar components with different text