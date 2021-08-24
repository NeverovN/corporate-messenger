import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    iconStyle: {
      marginRight: 5,
      color: palette.secondary,
    },
  };
});
