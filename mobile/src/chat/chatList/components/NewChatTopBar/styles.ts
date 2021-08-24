import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    newChatTopBarStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderColor: palette.secondary,
      borderRadius: 25,
      borderWidth: 1,
      marginHorizontal: 15,
      marginTop: 20,
    },
    iconStile: {
      marginHorizontal: 10,
      color: palette.secondary,
    },
    inputStyle: {
      flex: 1,
      fontSize: 15,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
