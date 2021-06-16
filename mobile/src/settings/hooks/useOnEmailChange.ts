import { useNavigation } from '@react-navigation/native';

export const useOnEmailChange = (setEmail: (email: string) => void) => {
  const navigation = useNavigation();
  return (email: string) => {
    setEmail(email);
    navigation.setParams({ newEmail: email });
  };
};
