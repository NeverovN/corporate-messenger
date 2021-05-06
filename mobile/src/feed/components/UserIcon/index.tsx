import React, { FC, memo } from 'react';
import { View, Image } from 'react-native';

// styles
import styles from './styles';

interface IUserIconViewProps {}

const UserIconView: FC<IUserIconViewProps> = () => {
  return (
    <View style={styles.userIconViewStyle}>
      <Image
        style={styles.userIconImageStile}
        source={{
          uri:
            'https://png.pngtree.com/png-clipart/20190705/original/pngtree-fire-explosion-blast-flame-png-transparent-png-image_4199261.jpg',
        }}
      />
    </View>
  );
};

export default memo(UserIconView);
