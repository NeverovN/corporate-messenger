import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  incomingMessageStyle: {
    padding: 4,
    margin: 2,
    backgroundColor: '#DBDADE',
  },
  outgoingMessageStyle: {
    padding: 4,
    margin: 2,
    backgroundColor: '#2D728F',
    flexDirection: 'row-reverse',
  },
  incomingTextStyle: {},
  outgoingTextStyle: { color: 'white' },
});
