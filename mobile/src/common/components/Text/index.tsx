import React, { FC, memo } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { TextType } from 'common/types/styles';

import styles from './styles';

function getStylesByTextType(textType: TextType): TextStyle {
  return styles[textType];
}

interface ITextProps extends TextProps {
  type?: TextType;
  children?: React.ReactNode;
}

const Text: FC<ITextProps> = (props) => {
  const textType: TextType = props.type || TextType.PRIMARY;

  const textStyles = getStylesByTextType(textType);

  return <RNText style={textStyles} {...props} />;
};

export default memo(Text);
