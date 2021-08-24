import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    iconStyle: {
      marginLeft: 15,
      fontSize: 25,
      color: palette.secondary,
    },
  };
});
