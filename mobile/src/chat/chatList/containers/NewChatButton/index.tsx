import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// styles
import styles from './styles';

// common components
import TextButton from '@/common/components/Button/TextButton';

// types
import { NewChatSetupStackNavigationProp } from '../../types/routes';

interface INewChatButtonContainerProps {}

const NewChatButtonContainer: FC<INewChatButtonContainerProps> = () => {
  const navigation = useNavigation<NewChatSetupStackNavigationProp>();
  const onPress = () => navigation.navigate('NewChatSetup');

  return (
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.buttonStyle}
        labelStyle={styles.textStyle}
        label="NEW CHAT"
        onPress={onPress}
      />
    </View>
  );
};

export default memo(NewChatButtonContainer);
