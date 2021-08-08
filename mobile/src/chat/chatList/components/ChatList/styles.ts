import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    existingChatsStyle: {
      marginHorizontal: 10,
      height: '100%',
    },
    missingChatsStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 20,
      color: palette.secondary,
    },
  };
});
