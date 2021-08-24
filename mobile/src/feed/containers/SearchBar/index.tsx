import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import Icon from 'common/components/Icon';

import { useTheme } from 'react-native-stylex';

interface ISearchBarContainerProps {
  setFilter(filter: string): void;
}

const SearchBarContainer: FC<ISearchBarContainerProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.wrapper}>
      <View style={styles.barStyle}>
        <Icon name="search" customStyle={styles.iconStyle} />
        <TextInput
          style={styles.inputStyle}
          placeholder="SEARCH"
          placeholderTextColor={palette.secondaryInactive}
          onChangeText={props.setFilter}
        />
      </View>
    </View>
  );
};

export default memo(SearchBarContainer);
