import React, { FC, memo } from 'react';
import { View } from 'react-native';

// common components
import Button from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

interface IFriendListButtonViewProps {
  onPress(): void;
}

const FriendListButtonView: FC<IFriendListButtonViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <Button
        label="FRIENDS"
        labelStyle={styles.labelStyle}
        containerStyle={styles.friendListButtonStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(FriendListButtonView);
