import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

interface IPostMenuButtonViewProps {}

const PostMenuButtonView: FC<IPostMenuButtonViewProps> = () => {
  return <View style={styles.buttonStyle} />;
};

export default memo(PostMenuButtonView);
