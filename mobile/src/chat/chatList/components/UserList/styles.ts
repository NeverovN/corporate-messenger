import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    existingUsersStyle: {
      marginHorizontal: 5,
      marginTop: 10,
      flex: 1,
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
    flatListStyle: {
      marginTop: 10,
    },
  };
});
