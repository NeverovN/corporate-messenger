import { useNavigation } from '@react-navigation/core';

export const useBackButtonNavigation = () => {
  const navigation = useNavigation();
  return () => navigation.goBack();
};
