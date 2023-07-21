import { OutlineButton, PrimaryButton } from '../../components/Button';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';

const AuthScreen: React.FC = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Image source={images.auth_banner} style={styles.banner} />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.title_bold}>Langu</Text>
          <Text style={styles.title_tine}>App</Text>
        </View>
        <Text style={styles.description}>
          Are you ready to learn languages easily in the funniest way ?
        </Text>

        <PrimaryButton onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </PrimaryButton>
        <OutlineButton onPress={() => navigation.navigate('RegisterScreen')}>
          Sign Up
        </OutlineButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authBackground,
  },
  banner: {
    resizeMode: 'contain',
    width: '100%',
    maxHeight: 300,
  },
  content: {
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    color: colors.textBlack,
  },
  title_bold: {
    fontSize: 36,
    fontWeight: '700',
  },
  title_tine: {
    fontSize: 36,
  },
  description: {
    color: colors.textLight,
    marginVertical: 20,
  },
});

export default AuthScreen;
