import { ID } from '../../types/common';

import { ThemeEntity } from '../../models/Theme';

class ThemeEntityController {
  createThemeEntity(userId: ID): ThemeEntity {
    return new ThemeEntity(userId);
  }

  setTheme(userId: ID, isLight: boolean): ThemeEntity {
    const newTheme = new ThemeEntity(userId);
    newTheme.isLight = isLight;
    return newTheme;
  }

  toggleTheme(theme: ThemeEntity): ThemeEntity {
    const newTheme = new ThemeEntity(theme.userId);
    newTheme.isLight = !theme.isLight;
    return newTheme;
  }
}

const themeEntityController = new ThemeEntityController();

export default themeEntityController;
