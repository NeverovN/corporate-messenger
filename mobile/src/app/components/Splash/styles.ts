import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    splashStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontFamily: 'Mulish-Regular_Bold',
      fontSize: 60,
      color: palette.secondary,
    },
  };
});
