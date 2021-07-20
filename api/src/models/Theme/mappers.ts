import { ThemeEntity } from './index';
import { Document } from 'mongoose';
export function mapThemeDocumentToThemeEntity(
  document: ThemeEntity & Document,
): ThemeEntity {
  return {
    _id: document._id,
    userId: document.userId,
    isLight: document.isLight,
    buildSchema: document.buildSchema,
  };
}
