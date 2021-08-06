import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import TextButton from 'common/components/Button/TextButton';

interface IFriendButtonViewProps {
  title: string;
  onPress(): void;
}

const FriendButtonView: FC<IFriendButtonViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.friendButtonStyle}
        onPress={props.onPress}
        label={props.title}
        labelStyle={styles.labelStyle}
      />
    </View>
  );
};

export default memo(FriendButtonView);
