import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  topTileBarStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',

    padding: 10,
    backgroundColor: COLORS.white,

    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryOpacity,

    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
  },
});
