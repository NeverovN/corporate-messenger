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
    marginRight: 5,
  },
  labelStyle: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
  },
});
