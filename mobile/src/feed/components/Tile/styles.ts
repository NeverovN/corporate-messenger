import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    tileStyle: {
      marginTop: 15,
      padding: 10,
      width: '100%',
      backgroundColor: palette.tint,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    spacer: {
      height: 1,
      width: '100%',
      marginVertical: 10,
      backgroundColor: palette.secondary,
    },
    centringWrapper: {
      alignItems: 'center',
    },
  };
});
