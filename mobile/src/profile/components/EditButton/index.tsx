import React, { FC, memo } from 'react';
import { View } from 'react-native';

// common components
import Button from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

interface IEditButtonViewProps {
  onPress(): void;
}

const EditButtonView: FC<IEditButtonViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <Button
        label="Friends"
        containerStyle={styles.editButtonStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(EditButtonView);
