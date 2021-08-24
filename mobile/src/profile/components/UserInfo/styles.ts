import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    userInfoViewStyle: {
      height: 70,
      justifyContent: 'center',
    },
    userNameStyle: {
      fontFamily: 'Mulish',
      fontSize: 20,
      color: palette.secondary,
    },
    userStatusStyle: {
      fontFamily: 'Mulish',
      fontSize: 15,
      color: palette.secondary,
    },
  };
});
