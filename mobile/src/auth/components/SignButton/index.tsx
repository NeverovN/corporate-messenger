import React, { memo } from 'react';
import { useStyles } from './styles';

// common components
import TextButton from 'common/components/Button/TextButton';

// types
import { TextType } from '@/common/types/styles';

interface ISignButtonProps {
  title: string;
  onPress?(): void;
}

const SignButton: React.FC<ISignButtonProps> = (props) => {
  const styles = useStyles();
  return (
    <TextButton
      textType={TextType.TITLE}
      labelStyle={styles.textStyle}
      containerStyle={styles.viewStyle}
      label={props.title}
      onPress={props.onPress}
    />
  );
};

export default memo(SignButton);
