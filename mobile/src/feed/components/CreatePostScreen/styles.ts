import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    backGround: {
      flex: 1,
      backgroundColor: palette.primary,
    },
    createPostScreenStyle: {
      padding: 10,
      flex: 1,
    },
    textStyle: {
      fontSize: 20,
    },
    inputStyle: {
      flex: 1,
      fontSize: 25,
      fontFamily: 'DroidSans',
      color: palette.secondary,
      margin: 15,
    },
    wrapperStyle: {
      flex: 1,
    },
  };
});
