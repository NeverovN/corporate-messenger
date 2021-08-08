import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    wrapperStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
      marginVertical: 10,
    },
    inputWrapper: {
      flex: 1,
      borderRadius: 50,
      borderWidth: 1,
      minHeight: 30,
      maxHeight: 100,
      padding: 5,
      borderColor: palette.secondary,
      marginHorizontal: 10,
      justifyContent: 'center',
    },
    textInputStyle: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: 15,
      fontFamily: 'DroidSans',
      color: palette.secondary,
    },
  };
});
