import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  editPasswordScreenStyle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: COLORS.primary,
  },
  inputStyle: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.tint,
    fontSize: 13,
    padding: 5,
    fontFamily: 'DroidSans',
    marginBottom: 15,
    color: COLORS.secondary,
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Mulish',
    color: COLORS.secondary,
  },
  wrapper: {
    marginBottom: 15,
  },
  spacer: {
    height: '20%',
  },
});
