import { ID } from '../../types/common';

import ThemeModel, { ThemeEntity } from '../../models/Theme';

import { mapThemeDocumentToThemeEntity } from '../../models/Theme/mappers';
import ThemeEntityController from './entity';

class ThemeModelController {
  async getThemes() {
    const themes = await ThemeModel.find().exec();

    if (!themes) {
      throw new Error('theme not found');
    }

    return themes;
  }

  async createThemeEntity(userId: ID) {
    const theme = ThemeEntityController.createThemeEntity(userId);

    const themeDocument = await ThemeModel.create(theme);

    themeDocument.save();

    return mapThemeDocumentToThemeEntity(themeDocument);
  }

  async setTheme(userId: ID, isLight: boolean) {
    const theme = await ThemeModel.findOne({ userId }).exec();

    if (!theme) {
      throw Error('theme not found');
    }

    const newTheme = ThemeEntityController.setTheme(userId, isLight);

    await ThemeModel.findByIdAndUpdate(theme._id, newTheme).exec();
    const updatedTheme = await ThemeModel.findById(theme._id).exec();

    if (!updatedTheme) {
      throw Error('network error, theme was not toggled');
    }

    return mapThemeDocumentToThemeEntity(updatedTheme);
  }

  async toggleTheme(userId: ID): Promise<ThemeEntity> {
    const theme = await ThemeModel.findOne({ userId }).exec();

    if (!theme) {
      throw Error('theme not found');
    }

    const updatedThemeEntity = ThemeEntityController.toggleTheme(
      mapThemeDocumentToThemeEntity(theme),
    );

    await ThemeModel.findByIdAndUpdate(theme._id, updatedThemeEntity).exec();
    const updatedTheme = await ThemeModel.findById(theme._id).exec();

    if (!updatedTheme) {
      throw Error('network error, theme was not toggled');
    }

    return mapThemeDocumentToThemeEntity(updatedTheme);
  }
}

const themeModelController = new ThemeModelController();

export default themeModelController;
