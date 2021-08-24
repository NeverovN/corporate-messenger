import { makeUseStyles } from 'react-native-stylex';

export const useStyles = makeUseStyles(() => {
  return {
    messageAreaStyle: {
      flex: 1,
      justifyContent: 'center',
      width: '98%',
      height: '100%',
    },
  };
});
