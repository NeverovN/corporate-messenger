import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IThirdPartyUserViewProps {}

const ThirdPartyUserView: FC<IThirdPartyUserViewProps> = () => {
  return (
    <View style={styles.thirdPartyUserStyle}>
      <Text>Third Party User Screen</Text>
    </View>
  );
};

export default memo(ThirdPartyUserView);
