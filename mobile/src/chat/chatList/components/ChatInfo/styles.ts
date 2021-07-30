import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  chatInfoViewStyle: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  primaryTextStyle: {
    fontFamily: 'Mulish-Regular_Bold',
    fontSize: 15,
    color: COLORS.secondary,
  },
  secondaryTextStyle: {
    fontFamily: 'Mulish',
    fontSize: 12,
    color: COLORS.secondary,
  },
});
