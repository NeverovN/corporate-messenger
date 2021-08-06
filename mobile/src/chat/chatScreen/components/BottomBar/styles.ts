import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputWrapperStyle: {
    marginRight: 15,
    flex: 1,
    borderColor: COLORS.secondary,
    borderRadius: 20,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 140,
    padding: 10,
  },
  textInputStyle: {
    fontFamily: 'DroidSans',
    fontSize: 15,
    color: COLORS.secondary,
  },
  commonStyle: {
    marginHorizontal: 15,
    color: COLORS.secondary,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
  imageViewer: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
  },
  iconStyle: {
    color: COLORS.secondary,
  },
});
