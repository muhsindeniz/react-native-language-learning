import {OutlineButton} from '../../../../components/Button'
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from 'res/colors'
import images from 'res/images'

const FastAuth = () => {
  return (
    <View>
      <OutlineButton
      leftIcon={
        <Image source={images.google_icon} alt='' style={styles.googleIcon}  />
      }
      >
        <Text>Continue with Google</Text>
      </OutlineButton>
      <OutlineButton
        leftIcon={
          <EvilIcons name="sc-facebook" color={colors.textBlue} size={24} />
        }>
        <Text>Continue with Facebook</Text>
      </OutlineButton>
      <OutlineButton
        leftIcon={
          <MaterialCommunityIcons
            name="apple"
            color={colors.textBlack}
            size={24}
          />
        }>
        <Text>Continue with Apple</Text>
      </OutlineButton>
    </View>
  )
}


const styles = StyleSheet.create({
    googleIcon: {
     width: 24,
     objectFit: "contain",
     height: 24
    },

})

export default FastAuth
