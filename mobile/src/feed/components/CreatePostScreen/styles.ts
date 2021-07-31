import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  createPostScreenStyle: {
    padding: 10,
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
  },
  inputStyle: {
    flex: 1,
    fontSize: 25,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
    margin: 15,
  },
  wrapperStyle: {
    flex: 1,
  },
});
