import {PrimaryButton} from '../../components/Button'
import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, Image} from 'react-native'
import {IconButton} from 'react-native-paper'
import colors from 'res/colors'
import FastAuth from './components/FastAuth/FastAuth'

const LoginScreen: React.FC = ({navigation}: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.loginForm}>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail address"
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Your password"
            secureTextEntry={!isPasswordVisible}
            style={styles.passwordInput}
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <IconButton
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            onPress={togglePasswordVisibility}
            iconColor="#bbb"
          />
        </View>

        <PrimaryButton>Log In</PrimaryButton>
      </View>

      <Text
        onPress={() => navigation.navigate('ForgorPasswordScreen')}
        style={styles.forgotPassword}>
        Forgot Password
      </Text>

      <View style={styles.fastLoginLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

     <FastAuth />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authBackground,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  loginForm: {
    paddingVertical: 20,
    gap: 20,
  },
  loginInput: {
    backgroundColor: '#fff',
  },
  emailInput: {
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.inputBorder,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.inputBorder,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: 'center',
    color: colors.textLight,
  },
  fastLoginLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#aaa',
  },
})

export default LoginScreen
