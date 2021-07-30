import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    borderRadius: 20,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 140,
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 15,
    flex: 1,
    borderColor: COLORS.secondary,
    fontFamily: 'DroidSans',
  },
  commonStyle: {
    marginHorizontal: 15,
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
});
