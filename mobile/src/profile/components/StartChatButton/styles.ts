import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    alignItems: 'center',
  },
  chatButtonStyle: {
    width: '80%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  labelStyle: {
    color: COLORS.secondary,
  },
});
