import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    width: 300,
  },
  wrapperStyle: {
    justifyContent: 'center',
  },
  imageStyle: {
    height: 40,
    width: 40,
    marginRight: 20,
    borderColor: COLORS.secondary,
    borderRadius: 20,
    borderWidth: 1,
  },
  titleTextStyle: {
    fontFamily: 'Mulish',
    fontSize: 15,
    color: COLORS.secondary,
  },
  membersTextStyle: {
    fontFamily: 'Mulish',
    fontSize: 12,
    color: COLORS.secondary,
  },
});
