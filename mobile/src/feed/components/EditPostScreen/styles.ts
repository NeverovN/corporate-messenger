import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(() => {
  return {
    editPostScreenStyle: {
      flex: 1,
    },
    inputStyle: {
      fontSize: 25,
      height: '90%',
      margin: 15,
    },
  };
});
