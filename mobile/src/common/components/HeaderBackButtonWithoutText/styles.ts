import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    buttonStyle: {
      marginLeft: 10,
      color: palette.secondary,
    },
  };
});
