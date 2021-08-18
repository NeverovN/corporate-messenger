import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import TextButton from 'common/components/Button/TextButton';

interface IThemeSwitcherButtonViewProps {
  currentTheme: 'dark' | 'light' | 'native';
  toggleTheme(toTheme: 'dark' | 'light' | 'native'): void;
}

const ThemeSwitcherButtonView: FC<IThemeSwitcherButtonViewProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  const styles = useStyles();

  const [lightIndicatorStyle, darkIndicatorStyle] =
    currentTheme === 'light'
      ? [styles.activeIndicatorStyle, styles.inactiveIndicatorStyle]
      : [styles.inactiveIndicatorStyle, styles.activeIndicatorStyle];

  return (
    <View style={styles.buttonStyle}>
      <Text style={{ ...styles.textStyle, ...lightIndicatorStyle }}>NOW</Text>
      <TextButton
        label="LIGHT"
        labelStyle={styles.lightLabelStyle}
        containerStyle={styles.lightContainerStyle}
        onPress={() => toggleTheme('light')}
      />
      <TextButton
        label="DARK"
        labelStyle={styles.darkLabelStyle}
        containerStyle={styles.darkContainerStyle}
        onPress={() => toggleTheme('dark')}
      />
      <Text style={{ ...styles.textStyle, ...darkIndicatorStyle }}>NOW</Text>
    </View>
  );
};

export default memo(ThemeSwitcherButtonView);
