// src/components/SplashScreen1.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { SvgXml } from 'react-native-svg';
// import ManCaveSvg from 'mancave.svg';

const SplashScreen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash2' as never);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <SvgXml xml={ManCaveSvg} width="200" height="200" /> */}
      <Text style={styles.text}>Welcome to Man Cave</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
//   image: {
//     width: 200, // Adjust as needed
//     height: 200, // Adjust as needed
//     marginBottom: 20, // Space between image and text
//   },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default SplashScreen1;