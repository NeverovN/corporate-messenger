import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    editPasswordScreenStyle: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 30,
      backgroundColor: palette.primary,
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
    wrapper: {
      marginBottom: 15,
    },
    spacer: {
      height: '20%',
    },
  };
});
