import {PrimaryButton} from '../../components/Button'
import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import {IconButton} from 'react-native-paper'
import colors from 'res/colors'

const RegisterScreen: React.FC = ({navigation}: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-up</Text>

      <View style={styles.authFormContainer}>
        <TextInput
          style={styles.signUpInput}
          keyboardType="default"
          placeholder='Full name'
        />
        <TextInput
          style={styles.signUpInput}
          keyboardType="email-address"
          placeholder='E-mail address'
          autoCapitalize='none'
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Create password"
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

        <PrimaryButton>Sign-up</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authBackground,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  authFormContainer: {
    paddingVertical: 30,
    gap: 20,
  },
  signUpInput: {
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
})

export default RegisterScreen
