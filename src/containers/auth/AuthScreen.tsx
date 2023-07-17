import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

        <TouchableOpacity
          style={[styles.primaryButton, styles.button]}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.primaryText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.primaryOutlineButton, styles.button]}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.outlineText}>Sign Up</Text>
        </TouchableOpacity>
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
    flex: 1,
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
  button: {
    borderRadius: 16,
    paddingVertical: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: colors.primaryButton,
  },
  primaryOutlineButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6a4ae3',
  },
  primaryText: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textWhite,
  },
  outlineText: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
});

export default AuthScreen;
