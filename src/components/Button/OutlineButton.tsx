import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import colors from 'res/colors'

interface OutlineButtonPropsType {
  children: React.ReactNode
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const PrimaryButton = ({children, onPress}: OutlineButtonPropsType) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6a4ae3',
    borderRadius: 16,
    paddingVertical: 20,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  }
})

export default PrimaryButton
