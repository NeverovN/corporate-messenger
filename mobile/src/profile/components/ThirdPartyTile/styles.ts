import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  thirdPartyTileStyles: {
    backgroundColor: COLORS.tint,
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonsWrapperStyle: {
    flexDirection: 'row',
  },
  separator: {
    height: 30,
    width: 1,
    backgroundColor: COLORS.secondary,
  },
});
