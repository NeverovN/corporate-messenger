import {
  all,
  one,
  create,
  update,
  remove,
  rest,
  prop,
  RestgooseModel,
  getModel,
} from '@xureilab/restgoose';
import { getModelForClass } from '@typegoose/typegoose';
import { ID } from '../../types/common';
import decodeToken from '../../utils/decodeToken';
import { ThemeController } from '../../controllers/Theme';
import { modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'theme', _id: true } })
@rest({
  route: '/theme',
  methods: [
    /*+*/
    /*+*/ all(), //GET
    /*+*/ one(), //GET
    /*+*/ create({
      fetch: async (res) => {
        const token = res.headers.authorization || '';
        const { userId } = decodeToken(token);
        ThemeController.toggleTheme(userId);

        return ThemeModel.findOne({ userId }) as any;
      },
    }), //POST
    /*+*/ update(), //PATCH
    /*+*/ remove(), //DElETE
    /*+*/
  ],
})
export class ThemeEntity extends RestgooseModel {
  _id: ID;

  @prop({ required: true })
  userId: ID;

  @prop({ required: true })
  isLight: boolean;

  constructor(userId: ID) {
    super();
    this.userId = userId;
    this.isLight = true;
  }
}

const ThemeModel = getModel(ThemeEntity);

export default ThemeModel;
