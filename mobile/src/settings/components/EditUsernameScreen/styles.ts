import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  editUsernameScreenStyle: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: COLORS.primary,
    flex: 1,
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
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Mulish',
    color: COLORS.secondary,
  },
  currentNameStyle: {
    height: 50,
    width: '80%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginBottom: 25,
  },
  spacer: {
    height: '25%',
  },
});
