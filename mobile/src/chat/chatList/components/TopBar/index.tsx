import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// types
import { IconType } from '@/common/types/styles';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from 'common/components/Icon';

interface ITopBarViewProps {
  onSearchPress(): void;
  onNewChatPress(): void;
  setFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  return (
    <View style={styles.topBarStyle}>
      <View style={styles.inputStyle}>
        <Icon
          name="search"
          type={IconType.LARGE}
          customStyle={styles.iconStyle}
        />
        <TextInput
          onChangeText={props.setFilter}
          placeholder="SEARCH"
          placeholderTextColor={COLORS.secondaryInactive}
        />
      </View>
      <IconButton
        icon="plus"
        iconType={IconType.LARGE}
        containerStyle={styles.buttonStyle}
        onPress={props.onNewChatPress}
      />
    </View>
  );
};

export default memo(TopBarView);
