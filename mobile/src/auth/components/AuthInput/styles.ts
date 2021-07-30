import { StyleSheet } from 'react-native';

// consts
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  inputStyle: {
    flex: 1,
    padding: 12,
    fontSize: 15,
    fontFamily: 'DroidSans',
  },

  viewStyle: {
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: COLORS.tint,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
