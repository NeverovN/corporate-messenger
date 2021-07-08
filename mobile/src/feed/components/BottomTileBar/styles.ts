import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  bottomTileBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 10,

    backgroundColor: COLORS.white,

    borderTopWidth: 1,
    borderTopColor: COLORS.primaryOpacity,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerStyle: {
    marginLeft: 10,
    alignItems: 'center',
  },
  labelStyle: {
    marginLeft: 5,
    fontSize: 18,
  },
});
