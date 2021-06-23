import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  topBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: COLORS.lightGray,
  },
  topBarTextViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    // backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 20,
  },
});
