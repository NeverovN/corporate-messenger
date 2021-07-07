import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  inputAreaStyles: {
    marginBottom: 70,
    width: '100%',
    alignItems: 'center',
  },
  loginStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryOpacity,
    width: '95%',
    borderRadius: 20,
    padding: 10,
  },
  passwordStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconStyle: {
    marginRight: 10,
  },
  wrapperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorStyle: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 1,
  },
});
