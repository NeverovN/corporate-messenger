import styles from 'chat/chatScreen/components/Message/styles';

export const useSetMsgStyle = (direction: string) => {
  const msgStyle =
    direction === 'outgoing'
      ? styles.outgoingMessageStyle
      : styles.incomingMessageStyle;
  const textStyle =
    direction === 'outgoing'
      ? styles.outgoingTextStyle
      : styles.incomingTextStyle;
  const viewStyle =
    direction === 'outgoing'
      ? styles.outgoingViewStyle
      : styles.incomingViewStyle;

  return [msgStyle, textStyle, viewStyle];
};
