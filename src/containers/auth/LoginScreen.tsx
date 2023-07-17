import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from 'res/colors';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.authBackground,
    padding: 30,
  },
});

export default LoginScreen;
