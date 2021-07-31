import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    borderRadius: 10,
    backgroundColor: COLORS.tint,
    marginTop: 10,
    paddingLeft: 20,
  },
});
