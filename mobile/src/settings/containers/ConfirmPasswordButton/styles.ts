import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  activeContainerStyle: {
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.submitButton,
    borderRadius: 20,
  },
  inactiveContainerStyle: {
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.submitButtonInactive,
    borderRadius: 20,
  },
  labelStyle: {
    fontFamily: 'Mulish',
    fontSize: 18,
    color: COLORS.submitButtonText,
  },
});
