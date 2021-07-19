// types
import { ThemeEntity } from '../../../models/Theme';
import { ThemeResolvers } from '../../../types/gql.generated';

const themeResolvers: ThemeResolvers = {
  id: (theme: ThemeEntity) => theme._id,
};

export default themeResolvers;
