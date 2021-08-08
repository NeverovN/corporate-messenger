import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    userStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      backgroundColor: palette.tint,
      borderRadius: 5,
      height: 85,
      marginTop: 10,
    },
  };
});
