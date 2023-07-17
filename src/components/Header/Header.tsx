import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from 'res/colors';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.headerBackground,
    paddingVertical: 40,
  },
});

export default Header;
