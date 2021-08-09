import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    thirdPartyUserStyle: {
      flex: 1,
      backgroundColor: palette.primary,
      paddingHorizontal: 10,
    },
    flatListStyle: {
      flexDirection: 'column-reverse',
    },
  };
});
