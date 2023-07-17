import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from 'res/colors';

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authBackground,
  },
});

export default RegisterScreen;
