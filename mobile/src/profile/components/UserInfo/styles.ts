import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userInfoViewStyle: {
    justifyContent: 'space-between',
    height: 70,
  },
  userNameStyle: {
    fontFamily: 'Mulish',
    fontSize: 20,
    color: COLORS.secondary,
  },
  userStatusStyle: {
    fontFamily: 'Mulish',
    fontSize: 15,
    color: COLORS.secondary,
  },
});
