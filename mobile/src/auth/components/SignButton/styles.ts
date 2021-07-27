import { StyleSheet } from 'react-native';
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  textStyle: {
    fontFamily: 'DroidSans',
    color: COLORS.secondary,
    fontSize: 15,
    margin: 12,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',

    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.secondary,

    marginTop: 10,
  },
});
