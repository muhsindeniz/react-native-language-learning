import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from 'res/colors'

interface OutlineButtonPropsType {
  children: React.ReactNode
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const OutlineButton = ({
  children,
  onPress,
  leftIcon,
  rightIcon,
}: OutlineButtonPropsType) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        leftIcon || rightIcon ? styles.activeIcon : styles.passiveIcon,
      ]}
      onPress={onPress}>
      <View>{leftIcon}</View>
      <Text style={styles.content}>{children}</Text>
      <View>{rightIcon}</View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6a4ae3',
    borderRadius: 16,
    marginVertical: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeIcon: {
   padding: 10,
   height: 46
  },
  passiveIcon: {
    padding: 20
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
})

export default OutlineButton
