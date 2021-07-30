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
    justifyContent: 'center',
    paddingLeft: 15,
    flex: 1,
    height: 35,
    borderColor: COLORS.secondary,
    borderRadius: 20,
    borderWidth: 1,

    fontFamily: 'DroidSans',
    fontSize: 20,
    color: COLORS.secondary,
  },
  buttonStyle: {
    marginHorizontal: 10,
  },
});
