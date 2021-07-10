import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  barStyle: {
    flexDirection: 'row',

    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryOpacity,
  },
  userInfoStyle: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,
  },
  menuButtonStyle: {
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
