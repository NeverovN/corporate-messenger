import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    friendFeedStyle: {
      flex: 1,
      paddingHorizontal: 10,
      height: '100%',
      backgroundColor: palette.primary,
    },
  };
});
