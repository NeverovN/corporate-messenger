import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    iconStyle: {
      marginRight: 15,
      fontSize: 30,
      color: palette.secondary,
    },
  };
});
