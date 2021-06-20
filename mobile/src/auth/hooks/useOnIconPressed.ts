export const useOnIconPress = (
  isHidden: boolean,
  setIsHidden: (isHidden: boolean) => void,
  setIconName: (iconName: string) => void,
) => {
  return () => {
    setIconName(isHidden ? 'eye' : 'eye-slash');
    setIsHidden(!isHidden);
  };
};
