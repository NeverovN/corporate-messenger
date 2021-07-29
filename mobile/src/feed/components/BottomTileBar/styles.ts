import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  bottomTileBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerStyle: {
    alignItems: 'center',
  },
  labelStyle: {
    marginLeft: 5,
    fontSize: 15,
    fontFamily: 'DroidSans',
    color: COLORS.white,
  },
});
