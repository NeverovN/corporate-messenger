import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: COLORS.tint,
    borderRadius: 5,
    height: 85,
  },
});
