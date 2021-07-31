import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  topBarStyle: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
  },
  iconStile: {
    marginHorizontal: 10,
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
    flex: 1,
  },
});
