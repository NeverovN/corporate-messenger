import COLORS from '@/common/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tileStyle: {
    marginTop: 15,
    padding: 10,
    width: '100%',
    backgroundColor: COLORS.tint,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  spacer: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: COLORS.white,
  },
  centringWrapper: {
    alignItems: 'center',
  },
});
