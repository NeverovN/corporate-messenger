import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    userDataStyle: {
      flexDirection: 'column',
    },
    primaryText: {
      fontSize: 15,
      fontFamily: 'Mulish-Regular_Bold',
      color: palette.secondary,
    },
    secondaryText: {
      fontSize: 12,
      fontFamily: 'Mulish',
      color: palette.secondary,
    },
    spacer: {
      height: 5,
    },
  };
});
