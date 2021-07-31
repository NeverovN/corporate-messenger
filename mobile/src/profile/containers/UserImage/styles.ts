import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  imageStyle: {
    height: 60, // default
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginRight: 15,
  },
});
