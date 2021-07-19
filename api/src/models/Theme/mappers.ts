import { ThemeEntity } from './index';
import { PostDocument } from './types';

export function mapPostDocumentToPostEntity(
  document: PostDocument,
): ThemeEntity {
  return {
    _id: document._id,
    userId: document.userId,
    isLight: document.isLight,
    buildSchema: document.buildSchema,
  };
}
