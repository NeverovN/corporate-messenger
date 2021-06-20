import React, { FC, memo } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './styles';

interface ITopBarViewProps {
  onPress(): void;
  filter: string;
  onChangeFilter(filter: string): void;
}

const TopBarView: FC<ITopBarViewProps> = (props) => {
  return (
    <View style={styles.topBarStyle}>
      <TextInput
        style={styles.inputStyle}
        value={props.filter}
        onChangeText={props.onChangeFilter}
        placeholder={'Search...'}
      />
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="search" size={25} style={styles.iconStile} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TopBarView);
