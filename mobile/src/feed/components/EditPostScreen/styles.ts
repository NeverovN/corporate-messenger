import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(({ palette }) => {
  return {
    editPostScreenStyle: {
      flex: 1,
    },
    inputStyle: {
      fontSize: 25,
      height: '90%',
      margin: 15,
      color: palette.secondary,
    },
  };
});
