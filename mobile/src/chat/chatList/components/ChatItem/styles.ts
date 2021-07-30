import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  chatItemStyle: {
    height: 70,
    backgroundColor: COLORS.tint,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
