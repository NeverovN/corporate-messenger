import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  accountScreenStyle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    marginBottom: 20,
    fontSize: 22,
    fontFamily: 'Mulish',
    color: COLORS.secondary,
  },
});
