import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  profileStyle: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    flex: 1,
  },
  flatListStyle: {
    flexDirection: 'column-reverse',
  },
});
