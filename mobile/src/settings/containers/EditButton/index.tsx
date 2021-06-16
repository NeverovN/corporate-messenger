import React, { FC, memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// styles
import styles from './styles';

// hooks
import { useHandleEditNavigation } from 'settings/hooks/useHandleEditNavigation';

// constants
import Directions from 'settings/constants/directions';

interface IEditButtonContainerProps {
  screen: Directions;
  title: string;
}

const EditButtonContainer: FC<IEditButtonContainerProps> = (props) => {
  const navigate = useHandleEditNavigation(props.screen);

  return (
    <View style={styles.editButtonViewStyle}>
      <TouchableOpacity style={styles.editButtonTouchStyles} onPress={navigate}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(EditButtonContainer);
