import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapper: {
      flex: 1,

      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginTop: 15,
    },
    barStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: 40,
      paddingHorizontal: 15,
      borderColor: palette.secondary,
      borderRadius: 40,
      borderWidth: 1,
    },
    iconStyle: {
      marginRight: 15,
    },
    inputStyle: {
      fontSize: 15,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
