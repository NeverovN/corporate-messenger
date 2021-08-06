import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  settingsStyle: {
    flex: 1,
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoutButtonContainerStyle: {
    width: '60%',
    height: 40,
    backgroundColor: COLORS.submitButton,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonLabelStyle: {
    color: COLORS.submitButtonText,
    fontSize: 18,
    fontFamily: 'Mulish',
  },
});
