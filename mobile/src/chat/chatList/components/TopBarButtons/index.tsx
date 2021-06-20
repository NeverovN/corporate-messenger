import React, { memo, FC } from 'react';
import { View } from 'react-native';
import IconButton from 'common/components/Button/IconButton';

import styles from './styles';
import { IconType } from '@/common/types/styles';

interface ITopBarButtonsViewProps {
  onNewChatPress(): void;
  onSearchPress(): void;
}

const TopBarButtonsView: FC<ITopBarButtonsViewProps> = (props) => {
  return (
    <View style={styles.topBarButtonsStyle}>
      <IconButton
        icon="plus"
        iconType={IconType.LARGE}
        containerStyle={styles.buttonStyle}
        onPress={props.onNewChatPress}
      />
      <IconButton
        icon="search"
        iconType={IconType.LARGE}
        containerStyle={styles.buttonStyle}
        onPress={props.onSearchPress}
      />
    </View>
  );
};

export default memo(TopBarButtonsView);
