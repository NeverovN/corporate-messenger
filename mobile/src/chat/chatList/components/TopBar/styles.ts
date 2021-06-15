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
});
