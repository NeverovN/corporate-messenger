import { useGetUserByIdQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackNavigationProp } from 'app/types/routes';

export const useRedirection = (userId: string) => {
  const navigation = useNavigation<ProfileStackNavigationProp>();
  const { data } = useGetUserByIdQuery({ variables: { id: userId } });

  const username = getUsername(
    data?.getUserById?.firstName || '',
    data?.getUserById?.lastName || '',
  );
  return () => {
    navigation.navigate('ProfileStack', {
      screen: 'ThirdPartyUser',
      params: { userId, username },
    });
  };
};
