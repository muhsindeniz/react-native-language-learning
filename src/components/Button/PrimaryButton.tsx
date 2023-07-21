import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from 'res/colors';

interface PrimaryButtonPropsType {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  onPress,
  disabled,
}: PrimaryButtonPropsType) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: disabled ? colors.disableButton : colors.primaryButton },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textWhite,
  },
});

export default PrimaryButton;
