import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    profileStyle: {
      backgroundColor: palette.primary,
      paddingHorizontal: 10,
      flex: 1,
    },
    flatListStyle: {
      flexDirection: 'column-reverse',
    },
  };
});
