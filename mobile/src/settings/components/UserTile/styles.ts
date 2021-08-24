import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    userTileStyle: {
      flexDirection: 'row',
      height: 100,
      borderWidth: 1,
      borderColor: palette.secondary,
      borderRadius: 10,
      margin: 10,
      marginTop: 20,
      marginBottom: 30,
    },
    userImageImageStyle: {
      width: 70,
      height: 70,
      borderRadius: 40,
      margin: 15,
      borderWidth: 1,
      borderColor: palette.secondary,
    },
    userInfoStyle: {
      justifyContent: 'center',
      marginLeft: 10,
    },
    userNameStyle: {
      fontFamily: 'Mulish',
      fontSize: 20,
      color: palette.secondary,
    },
    userEmailStyle: {
      fontFamily: 'Mulish',
      fontSize: 15,
      color: palette.secondary,
    },
  };
});
