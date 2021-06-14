import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  incomingViewStyle: { alignItems: 'flex-start', margin: 5 },
  outgoingViewStyle: { alignItems: 'flex-end', margin: 5 },
  commonMessageStyle: {
    padding: 10,
    borderRadius: 10,
  },
  incomingMessageStyle: {
    backgroundColor: '#DBDADE',
  },
  outgoingMessageStyle: {
    backgroundColor: '#2D728F',
  },
  incomingTextStyle: {},
  outgoingTextStyle: { color: 'white' },
  nameStyle: {
    marginBottom: 3,
  },
});
