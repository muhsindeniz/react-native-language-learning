import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from 'res/colors'

const AppHeaderLeft = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.leftButton}
      onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons
        name="chevron-left"
        color={colors.authLeftIcon}
        size={30}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  leftButton: {
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    padding: 4,
  },
})

export default AppHeaderLeft
