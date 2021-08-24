import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    topBarStyle: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginRight: 10,
      height: 70,
      backgroundColor: palette.primary,
    },
    inputStyle: {
      flexDirection: 'row',
      alignItems: 'center',

      flex: 1,
      height: 35,
      borderColor: palette.secondary,
      borderRadius: 20,
      borderWidth: 1,
      marginLeft: 15,

      fontFamily: 'DroidSans',
      fontSize: 20,
      color: palette.secondary,
    },
    buttonStyle: {
      marginHorizontal: 15,
      color: palette.secondary,
    },
    iconStyle: {
      marginHorizontal: 10,
      color: palette.secondary,
    },
    textInputStyle: {
      flex: 1,
      fontFamily: 'DroidSans',
      fontSize: 15,
      color: palette.secondary,
    },
  };
});
