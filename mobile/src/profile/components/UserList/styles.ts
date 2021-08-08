import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    existingUsersStyle: {
      marginHorizontal: 10,
    },
    absentUsersStyle: {
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
