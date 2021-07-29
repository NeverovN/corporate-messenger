import { useNavigation } from '@react-navigation/native';
import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

interface IHeaderBackButtonWithoutTextContainerProps {}

const HeaderBackButtonWithoutTextContainer: FC<IHeaderBackButtonWithoutTextContainerProps> = () => {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return (
    <IconButton
      icon="back"
      onPress={back}
      containerStyle={styles.buttonStyle}
      iconType={IconType.LARGE}
    />
  );
};

export default memo(HeaderBackButtonWithoutTextContainer);
/* Vector */
