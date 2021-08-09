import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    barStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userInfoStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuButtonStyle: {
      justifyContent: 'center',
      backgroundColor: palette.primary,
    },
  };
});
