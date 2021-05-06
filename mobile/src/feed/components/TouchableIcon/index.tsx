import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

styles;
import styles from './styles';

interface ITouchableIconViewProps {
  name: string;
  size: number;
  onPress?(): void;
}

const TouchableIconView: FC<ITouchableIconViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.touchableIconStyle} onPress={props.onPress}>
      <Icon name={props.name} size={props.size} />
    </TouchableOpacity>
  );
};

export default memo(TouchableIconView);
