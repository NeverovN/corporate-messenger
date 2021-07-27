import { useNavigation } from '@react-navigation/native';
import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

interface IHeaderBackButtonWithoutTextContainerProps {}

const HeaderBackButtonWithoutTextContainer: FC<IHeaderBackButtonWithoutTextContainerProps> = () => {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return <TouchableOpacity style={styles.buttonStyle} onPress={back} />;
};

export default memo(HeaderBackButtonWithoutTextContainer);
