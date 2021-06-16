import DIRECTION from '../constants/direction';

export const useDirection = (author: string, currentUser: string) => {
  return author === currentUser ? DIRECTION.OUTGOING : DIRECTION.INCOMING;
};
