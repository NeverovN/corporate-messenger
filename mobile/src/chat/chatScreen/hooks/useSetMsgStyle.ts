import styles from 'chat/chatScreen/components/Message/styles';
import DIRECTION from '../constants/direction';

export const useSetMsgStyle = (direction: string) => {
  const msgStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingMessageStyle
      : styles.incomingMessageStyle;
  const textStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingTextStyle
      : styles.incomingTextStyle;
  const viewStyle =
    direction === DIRECTION.OUTGOING
      ? styles.outgoingViewStyle
      : styles.incomingViewStyle;

  return [msgStyle, textStyle, viewStyle];
};
