import { StyleSheet } from 'react-native';

// consts
import COLORS from '@/common/constants/colors';

export default StyleSheet.create({
  inputAreaStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  screenNameStyle: {
    fontFamily: 'Mulish-Regular_Light',
    fontSize: 50,
    color: COLORS.secondary,
  },

  screenNameWrapper: {
    margin: 30,
  },

  loginStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '75%',
  },

  separator: {
    height: '10%',
  },

  registerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
  },

  textStyle: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: COLORS.secondary,
  },

  emailStyle: {
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: COLORS.tint,
    flexDirection: 'row',
    alignItems: 'center',
  },

  passwordStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStyle: {
    marginRight: 10,
  },

  wrapperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  separatorStyle: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    height: 1,
  },

  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },

  screenWrapperStyle: {
    marginBottom: 90,
    alignItems: 'center',
  },

  buttonWrapperStyle: {
    width: '100%',
    marginTop: 50,
  },
});
