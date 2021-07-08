import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomTileBarStyle: {
    width: '100%',
    height: 50, // just random number
    backgroundColor: COLORS.beige,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: 10,
  },
});
