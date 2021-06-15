import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomBarStyle: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 10, // safe area imitating
    backgroundColor: COLORS.lightGray,
  },
  textInputStyle: {
    flex: 1,
  },
  commonStyle: {
    paddingRight: 15,
  },
});
