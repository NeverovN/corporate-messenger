import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    alignItems: 'center',
  },
  addPostButtonStyle: {
    width: '80%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  iconStyle: {
    fontSize: 14,
    marginRight: 5,
  },
  labelStyle: {
    fontSize: 14,
  },
});
