import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    editUsernameScreenStyle: {
      alignItems: 'center',
      paddingTop: 30,
      backgroundColor: palette.primary,
      flex: 1,
    },
    inputStyle: {
      width: '80%',
      height: 40,
      borderRadius: 20,
      backgroundColor: palette.tint,
      fontSize: 13,
      padding: 5,
      fontFamily: 'DroidSans',
      marginBottom: 15,
      color: palette.secondary,
    },
    textStyle: {
      fontSize: 15,
      fontFamily: 'Mulish',
      color: palette.secondary,
    },
    currentNameStyle: {
      height: 50,
      width: '80%',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: palette.secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWrapper: {
      marginBottom: 25,
    },
    spacer: {
      height: '25%',
    },
  };
});
