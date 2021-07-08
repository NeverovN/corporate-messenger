import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  registerStyle: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 70,
  },
  inputAreaStyle: {
    backgroundColor: COLORS.primaryOpacity,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '95%',
    padding: 10,
  },
  wrapperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
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
  separatorStyle: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 1,
  },
});
