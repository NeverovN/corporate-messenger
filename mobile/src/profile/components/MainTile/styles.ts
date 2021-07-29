import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  mainTileStyles: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.tint,
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
