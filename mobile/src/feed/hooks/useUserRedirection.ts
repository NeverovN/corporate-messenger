import { useNavigation } from '@react-navigation/native';
import { ProfileStackNavigationProp } from 'app/types/routes';

export const useUserRedirection = (userId: string) => {
  const navigation = useNavigation<ProfileStackNavigationProp>();

  return () => {
    navigation.navigate('ProfileStack', {
      screen: 'ThirdPartyUser',
      params: { userId },
    });
  };
};
