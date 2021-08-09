import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    textStyle: {
      fontFamily: 'DroidSans',
      color: palette.secondary,
      fontSize: 15,
      margin: 12,
    },
    viewStyle: {
      justifyContent: 'center',
      alignItems: 'center',

      width: '100%',

      borderRadius: 50,
      borderWidth: 1,
      borderColor: palette.secondary,

      marginTop: 10,
    },
  };
});
