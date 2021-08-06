import { StyleSheet } from 'react-native';

// colors
import COLORS from 'common/constants/colors';

export default StyleSheet.create({
  existingChatsStyle: {
    marginHorizontal: 10,
    height: '100%',
  },
  missingChatsStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: COLORS.secondary,
  },
});
