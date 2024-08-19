// src/components/MainContent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Man Cave</Text>
      <Text style={styles.subText}>Your ultimate masculine space</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#CCCCCC',
  },
});

export default MainContent;