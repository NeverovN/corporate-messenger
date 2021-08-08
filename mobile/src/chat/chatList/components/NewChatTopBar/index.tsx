import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import Icon from 'common/components/Icon';

// types
import { IconType } from '@/common/types/styles';
import { useTheme } from 'react-native-stylex';

interface ITopBarViewProps {
  filter: string;
  onChangeFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.newChatTopBarStyle}>
      <Icon
        name="search"
        type={IconType.LARGE}
        customStyle={styles.iconStile}
      />
      <TextInput
        placeholder="SEARCH"
        placeholderTextColor={palette.secondaryInactive}
        style={styles.inputStyle}
        value={props.filter}
        onChangeText={props.onChangeFilter}
      />
    </View>
  );
};

export default memo(TopBarView);
