export const useSetNewChatLogo = (setLogo: (logo: string) => void) => {
  return () => {
    console.log('set logo');
  };
};
