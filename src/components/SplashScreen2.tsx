// src/components/SplashScreen2.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen2 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main' as never);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        {/* <Image
            source={require('../assets/hammer.svg')}
            style={styles.image}
        /> */}
      <Text style={styles.text}>Your Ultimate Masculine Space</Text>
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
//   image:{
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default SplashScreen2;