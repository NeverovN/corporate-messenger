import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  wrapperStyle: {
    width: '100%',
    alignItems: 'center',
  },
  addPostButtonStyle: {
    width: '80%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    marginVertical: 10,
  },
});
