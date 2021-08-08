import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

// types
import { IconType } from '@/common/types/styles';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from 'common/components/Icon';
import { useTheme } from 'react-native-stylex';

interface ITopBarViewProps {
  onSearchPress(): void;
  onNewChatPress(): void;
  setFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.topBarStyle}>
      <View style={styles.inputStyle}>
        <Icon
          name="search"
          type={IconType.LARGE}
          customStyle={styles.iconStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={props.setFilter}
          placeholder="SEARCH"
          placeholderTextColor={palette.secondaryInactive}
        />
      </View>
      <IconButton
        icon="plus"
        iconType={IconType.LARGE}
        iconStyle={styles.buttonStyle}
        onPress={props.onNewChatPress}
      />
    </View>
  );
};

export default memo(TopBarView);
