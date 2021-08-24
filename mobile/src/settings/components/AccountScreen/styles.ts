import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    accountScreenStyle: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 30,
      backgroundColor: palette.primary,
    },
    textStyle: {
      marginBottom: 20,
      fontSize: 22,
      fontFamily: 'Mulish',
      color: palette.secondary,
    },
  };
});
