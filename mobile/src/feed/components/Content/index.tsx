import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import { useStyles } from './styles';

interface IContentViewProps {
  text: string;
}

const ContentView: FC<IContentViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.contentStyle}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

export default memo(ContentView);
