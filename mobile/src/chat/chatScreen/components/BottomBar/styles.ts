import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomBarStyle: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 10, // safe area imitating
    backgroundColor: '#CBCBD4',
  },
  textInputStyle: {
    flex: 1,
  },
  commonStyle: {
    paddingRight: 15,
  },
});
