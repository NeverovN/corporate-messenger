import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  unreadStyle: {
    marginRight: 10,
    borderRadius: 20,
    borderColor: COLORS.secondary,
    borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    minWidth: 40,
  },
  wrapperStyle: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  textStyle: {
    color: COLORS.secondary,
    fontSize: 12,
    fontFamily: 'Mulish',
  },
});
