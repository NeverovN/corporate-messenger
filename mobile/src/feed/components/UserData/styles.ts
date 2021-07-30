import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userDataStyle: {
    flexDirection: 'column',
  },
  primaryText: {
    fontSize: 15,
    fontFamily: 'Mulish-Regular_Bold',
    color: COLORS.secondary,
  },
  secondaryText: {
    fontSize: 12,
    fontFamily: 'Mulish',
    color: COLORS.secondary,
  },
  spacer: {
    height: 5,
  },
});
