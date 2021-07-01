import COLORS from '@/common/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapperStyle: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  textInputStyle: {
    width: '90%',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 20,
  },
});
