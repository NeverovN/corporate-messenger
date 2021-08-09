import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    userStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 90,
      borderRadius: 10,
      backgroundColor: palette.tint,
      marginTop: 10,
      paddingLeft: 20,
    },
  };
});
