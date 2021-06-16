import React, { memo, FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ITopBarButtonsViewProps {
  onNewChatPress(): void;
  onSearchPress(): void;
}

const TopBarButtonsView: FC<ITopBarButtonsViewProps> = (props) => {
  return (
    <View style={styles.topBarButtonsStyle}>
      <TouchableOpacity onPress={props.onNewChatPress}>
        <Icon name="plus" size={25} style={styles.buttonStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onSearchPress}>
        <Icon name="search" size={25} style={styles.buttonStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TopBarButtonsView);
