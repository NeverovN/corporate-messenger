import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: '60%',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    textStyle: {
      fontFamily: 'DroidSans',
      fontSize: 18,
      color: palette.secondary,
    },
    wrapperStyle: {
      alignItems: 'center',
    },
  };
});
