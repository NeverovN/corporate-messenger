import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 15,
  },
  barStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
    paddingHorizontal: 15,
    borderColor: COLORS.secondary,
    borderRadius: 40,
    borderWidth: 1,
  },
  iconStyle: {
    marginRight: 15,
  },
  inputStyle: {
    fontSize: 15,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
  },
});
