// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23a5d4',
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default ProfileScreen;

// src/screens/ProfileScreen.tsx and src/screens/SettingsScreen.tsx
// Create similar components with different text