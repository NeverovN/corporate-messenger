import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  textStyle: {
    color: COLORS.white,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 150,
    height: 40,
    borderRadius: 10,

    marginTop: 20,

    backgroundColor: COLORS.primaryOpacity,
  },
});
