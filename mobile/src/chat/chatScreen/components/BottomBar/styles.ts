import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomBarStyle: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    minHeight: 50,
    maxHeight: 120,
    paddingVertical: 15,
    backgroundColor: COLORS.lightGray,
  },
  textInputStyle: {
    flex: 1,
    marginRight: 10,
  },
  commonStyle: {
    paddingRight: 15,
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
