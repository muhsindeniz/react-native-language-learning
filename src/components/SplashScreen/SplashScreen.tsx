import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from 'res/images';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const splashTime = 2000;

    const timer = setTimeout(() => {
      navigation.replace('AuthScreen');
    }, splashTime);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={images.splash_logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default SplashScreen;
