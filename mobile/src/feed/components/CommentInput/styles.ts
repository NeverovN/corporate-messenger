import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  wrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 10,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    minHeight: 30,
    maxHeight: 100,
    padding: 5,
    borderColor: COLORS.secondary,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  textInputStyle: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
  },
});
