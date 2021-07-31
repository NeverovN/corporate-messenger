import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  flatListStyle: {
    width: '95%',
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
  buttonLabelStyle: {
    fontFamily: 'DroidSans',
    fontSize: 18,
    color: COLORS.secondary,
  },
  buttonContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '60%',
    borderRadius: 20,
    borderWidth: 1,
  },
});
