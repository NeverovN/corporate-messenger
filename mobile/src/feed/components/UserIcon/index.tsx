import React, { FC, memo } from 'react';
import { View, Image } from 'react-native';

// styles
import styles from './styles';

interface IUserIconViewProps {
  imgUrl: string;
}

const UserIconView: FC<IUserIconViewProps> = (props) => {
  return (
    <View style={styles.userIconViewStyle}>
      <Image
        style={styles.userIconImageStyle}
        source={{
          uri: props.imgUrl,
        }}
      />
    </View>
  );
};

export default memo(UserIconView);
