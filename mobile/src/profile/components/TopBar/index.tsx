import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// common components
import Icon from 'common/components/Icon';
import { IconType } from '@/common/types/styles';

interface ITopBarViewProps {
  filter: string;
  onChangeFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topBarStyle}>
        <Icon
          name="search"
          type={IconType.LARGE}
          customStyle={styles.iconStile}
        />
        <TextInput
          style={styles.inputStyle}
          value={props.filter}
          onChangeText={props.onChangeFilter}
          placeholder="SEARCH"
          placeholderTextColor={COLORS.secondaryInactive}
        />
      </View>
    </View>
  );
};

export default memo(TopBarView);
