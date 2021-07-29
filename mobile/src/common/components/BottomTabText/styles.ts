import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  focusedTextStyle: {
    fontSize: 12,
    fontFamily: 'DroidSans-Bold',
    color: COLORS.secondary,
  },
  unfocusedTextStyle: {
    fontSize: 12,
    fontFamily: 'DroidSans',
    color: COLORS.secondaryInactive,
  },
});
