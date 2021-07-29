import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  editButtonViewStyle: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tint,
    borderRadius: 20,
    marginTop: 20,
  },
  labelStyle: {
    fontFamily: 'Mulish',
    fontSize: 17,
    color: COLORS.secondary,
  },
});
