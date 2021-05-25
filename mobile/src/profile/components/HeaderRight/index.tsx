import React, { FC, memo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

interface IHeaderRightProps {
  onPress(): void;
  size: number;
}

const HeaderRight: FC<IHeaderRightProps> = (props) => {
  return (
    <TouchableOpacity style={styles.headerRightStyle} onPress={props.onPress}>
      <Icon name="cog" size={props.size} />
    </TouchableOpacity>
  );
};

export default memo(HeaderRight);
