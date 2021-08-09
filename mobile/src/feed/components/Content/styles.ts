import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    contentStyle: {
      marginHorizontal: 20,
    },
    textStyle: {
      fontSize: 15,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
