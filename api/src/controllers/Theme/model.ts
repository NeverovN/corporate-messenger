import { ID } from '../../types/common';

import ThemeModel, { ThemeEntity } from '../../models/Theme';

import { mapThemeDocumentToThemeEntity } from '../../models/Theme/mappers';
import ThemeEntityController from './entity';

class ThemeModelController {
  async getTheme() {
    const theme = await ThemeModel.find().exec();

    if (!theme) {
      throw new Error('theme not found');
    }

    return theme;
  }

  async createThemeEntity(userId: ID) {
    const theme = ThemeEntityController.createThemeEntity(userId);

    const themeDocument = await ThemeModel.create(theme);

    console.log(themeDocument);
    themeDocument.save();

    return mapThemeDocumentToThemeEntity(themeDocument);
  }

  async setTheme(userId: ID, isLight: boolean) {
    const theme = await ThemeModel.findById({ userId }).exec();

    if (!theme) {
      throw Error('theme not found');
    }

    const newTheme = ThemeEntityController.setTheme(userId, isLight);

    await ThemeModel.findByIdAndUpdate(newTheme._id, newTheme).exec();
    const updatedTheme = await ThemeModel.findById(newTheme._id).exec();

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

    await ThemeModel.findOneAndUpdate({ userId }, updatedThemeEntity).exec();
    const updatedTheme = await ThemeModel.findOne({ userId }).exec();

    if (!updatedTheme) {
      throw Error('network error, theme was not toggled');
    }

    return mapThemeDocumentToThemeEntity(updatedTheme);
  }
}

const themeModelController = new ThemeModelController();

export default themeModelController;
