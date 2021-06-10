import React, { FC, memo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

interface IHeaderLeftProps {
  onPress(): void;
  size: number;
}

const HeaderLeft: FC<IHeaderLeftProps> = (props) => {
  return (
    <TouchableOpacity style={styles.headerLeftStyle} onPress={props.onPress}>
      <Icon name="search" size={props.size} />
    </TouchableOpacity>
  );
};

export default memo(HeaderLeft);
