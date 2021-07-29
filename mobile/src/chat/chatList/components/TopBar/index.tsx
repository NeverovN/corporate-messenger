import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// types
import { IconType } from '@/common/types/styles';

// common components
import IconButton from '@/common/components/Button/IconButton';
import { TextInput } from 'react-native-gesture-handler';

interface ITopBarViewProps {
  onSearchPress(): void;
  onNewChatPress(): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  return (
    <View style={styles.topBarStyle}>
      <IconButton
        icon="plus"
        iconType={IconType.LARGE}
        containerStyle={styles.buttonStyle}
        onPress={props.onNewChatPress}
      />
      <View style={styles.inputStyle}>
        <TextInput
          placeholder="SEARCH"
          placeholderTextColor={COLORS.secondaryInactive}
        />
      </View>
      <IconButton
        icon="search"
        iconType={IconType.LARGE}
        containerStyle={styles.buttonStyle}
        onPress={props.onSearchPress}
      />
    </View>
  );
};

export default memo(TopBarView);
