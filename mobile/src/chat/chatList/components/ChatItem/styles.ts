import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    chatItemStyle: {
      height: 70,
      backgroundColor: palette.tint,
      borderRadius: 5,
      marginTop: 10,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
});
