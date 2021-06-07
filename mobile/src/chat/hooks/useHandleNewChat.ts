export const useHandleNewChat = () => {
  // call apollo mutation
  // chat with appropriate id will be stored in apollo cache
  return () => {
    console.log('new chat button pressed');
  };
};
