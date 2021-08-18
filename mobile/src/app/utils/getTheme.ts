import { lightTheme, darkTheme } from 'common/constants/colors';
import { Appearance } from 'react-native';

export const getTheme = (themeName: 'light' | 'dark' | 'native') => {
  if (themeName === 'light') {
    return lightTheme;
  }
  if (themeName === 'dark') {
    return darkTheme;
  }
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme === 'dark') {
    return darkTheme;
  }
  return lightTheme;
};
