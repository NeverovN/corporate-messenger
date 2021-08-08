import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    screenStyle: {
      flex: 1,
      alignItems: 'center',

      paddingHorizontal: 10,

      backgroundColor: palette.primary,
    },
    flatListStyle: {
      width: '100%',
    },
  };
});
