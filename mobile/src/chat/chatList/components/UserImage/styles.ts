import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  userImageViewStyle: {
    overflow: 'hidden',
    margin: 15,
  },
  userImageImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
});
