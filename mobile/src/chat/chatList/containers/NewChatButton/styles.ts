import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '60%',
    borderRadius: 20,
    borderWidth: 1,
  },
  textStyle: {
    fontFamily: 'DroidSans',
    fontSize: 18,
    color: COLORS.secondary,
  },
  wrapperStyle: {
    alignItems: 'center',
  },
});
