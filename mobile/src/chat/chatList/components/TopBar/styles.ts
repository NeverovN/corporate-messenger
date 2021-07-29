import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  topBarStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 10,
    height: 70,
    backgroundColor: COLORS.primary,
  },
  inputStyle: {
    flex: 1,
  },
  buttonStyle: {
    marginLeft: 10,
  },
});
