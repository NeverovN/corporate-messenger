import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  newChatTopBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: COLORS.secondary,
    borderRadius: 25,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  iconStile: {
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
  },
});
