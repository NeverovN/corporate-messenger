export const useDirection = (author: string, currentUser: string) => {
  return author === currentUser ? 'outgoing' : 'incoming';
};
