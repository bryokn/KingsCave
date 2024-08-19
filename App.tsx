// App.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ManCaveApp from './src/ManCaveApp';

export default function App() {
  return (
    <SafeAreaProvider>
      <ManCaveApp />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}