import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    headerStyle: {
      backgroundColor: palette.primary,
    },
    headerTitleStyle: {
      fontSize: 25,
      fontFamily: 'Mulish-Regular_Light',
      color: palette.secondary,
    },
  };
});
