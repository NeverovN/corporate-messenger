import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// common components
import Icon from 'common/components/Icon';

// colors
import COLORS from 'common/constants/colors';

interface ISearchBarContainerProps {
  setFilter(filter: string): void;
}

const SearchBarContainer: FC<ISearchBarContainerProps> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.barStyle}>
        <Icon name="search" customStyle={styles.iconStyle} />
        <TextInput
          style={styles.inputStyle}
          placeholder="SEARCH"
          placeholderTextColor={COLORS.secondaryInactive}
          onChangeText={props.setFilter}
        />
      </View>
    </View>
  );
};

export default memo(SearchBarContainer);
