import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    postScreenStyle: {
      alignItems: 'stretch',
      width: '100%',
      height: '100%',
      backgroundColor: palette.primary,
    },
    listStyle: {
      paddingHorizontal: 10,
    },
  };
});
