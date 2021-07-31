import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: 10,

    backgroundColor: COLORS.primary,
  },
  flatListStyle: {
    width: '100%',
  },
  itemStyle: {
    flexDirection: 'row',
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 35,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    marginRight: 20,
  },
  nameStyle: {
    fontSize: 20,
    fontFamily: 'Mulish-Regular_Bold',
    color: COLORS.secondary,
  },
});