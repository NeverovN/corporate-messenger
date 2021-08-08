import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    headerTitleStyle: {
      fontSize: 25,
      fontFamily: 'Mulish-Regular_Light',
      color: palette.secondary,
    },
    headerStyle: {
      backgroundColor: palette.primary,
    },
  };
});
