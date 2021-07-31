import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// common components
import Icon from 'common/components/Icon';

// types
import { IconType } from '@/common/types/styles';

interface ITopBarViewProps {
  filter: string;
  onChangeFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  return (
    <View style={styles.newChatTopBarStyle}>
      <Icon
        name="search"
        type={IconType.LARGE}
        customStyle={styles.iconStile}
      />
      <TextInput
        placeholder="SEARCH"
        placeholderTextColor={COLORS.secondaryInactive}
        style={styles.inputStyle}
        value={props.filter}
        onChangeText={props.onChangeFilter}
      />
    </View>
  );
};

export default memo(TopBarView);
