import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  chatItemStyle: {
    height: 70,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
