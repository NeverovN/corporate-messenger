import React, { FC, memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

// containers
import UserInfoContainer from 'profile/containers/UserInfo';
import { useRoute } from '@react-navigation/native';
import { ThirdPartyUserRouteProp } from '@/profile/types/routes';

interface IUserHeaderInfoViewProps {}

const UserHeaderInfoView: FC<IUserHeaderInfoViewProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();
  return (
    <View style={styles.userHeaderInfoStyle}>
      <UserInfoContainer userId={params?.userId} />
    </View>
  );
};

export default memo(UserHeaderInfoView);
