import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    newChatScreenStyle: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: palette.primary,
    },
  };
});
