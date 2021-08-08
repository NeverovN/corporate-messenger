import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import { useStyles } from './styles';

interface IUserInfoViewProps {
  userName: string;
}

const UserInfoView: FC<IUserInfoViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.userInfoViewStyle}>
      <Text style={styles.userNameStyle}>{props.userName} </Text>
    </View>
  );
};

export default memo(UserInfoView);
