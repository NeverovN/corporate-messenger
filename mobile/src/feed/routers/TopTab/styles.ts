import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    indicatorStyle: {
      backgroundColor: palette.secondary,
    },
    labelStyle: {
      fontFamily: 'DroidSans-Bold',
      fontSize: 12,
    },
    style: {
      backgroundColor: palette.primary,
    },
  };
});
