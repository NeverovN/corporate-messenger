import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  wrapperStyle: {
    alignItems: 'center',
  },
  accountSettingsButtonStyles: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: COLORS.tint,
  },
  textStyle: {
    fontFamily: 'Mulish',
    fontSize: 18,
    color: COLORS.secondary,
  },
});
