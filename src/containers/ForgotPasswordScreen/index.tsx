import {PrimaryButton} from '../../components/Button'
import React, {useState} from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import {TextInput} from 'react-native-paper'
import colors from 'res/colors'

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const handleEmailChange = (text: string) => {
    setEmail(text)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    setIsValidEmail(emailRegex.test(text))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.loginForm}>
        <TextInput
          label="E-mail address"
          mode="outlined"
          style={styles.loginInput}
          theme={{
            colors: {
              primary: colors.activeInputBorder,
            },
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          outlineColor={colors.inputBorder}
          value={email}
          onChangeText={handleEmailChange}
        />

        <PrimaryButton disabled={!isValidEmail} onPress={() => Alert.alert("Şifre sıfırlama kodu email adresinize gönderildi!")}>
          Reset my password
        </PrimaryButton>
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
  loginForm: {
    paddingVertical: 30,
    gap: 20,
  },
  loginInput: {
    backgroundColor: '#fff',
  },
})

export default ForgotPasswordScreen
