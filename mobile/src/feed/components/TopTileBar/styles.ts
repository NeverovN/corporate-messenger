import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  barStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButtonStyle: {
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
