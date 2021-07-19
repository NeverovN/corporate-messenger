import {
  RestgooseModel,
  prop,
  rest,
  one,
  create,
  update,
  remove,
  all,
} from '@xureilab/restgoose';
import { getModelForClass } from '@typegoose/typegoose';
import { ID } from '../../types/common';

@rest({
  /*+*/ route: '/theme',
  schemaOptions: { collection: 'themes', _id: true },
  /*+*/ methods: [
    all(), //GET    /theme
    one(), //GET    /theme/:id
    create(), //POST   /theme
    update(), //PATCH  /theme/:id
    remove(), //DElETE /theme/:id
  ],
  /*+*/
})
export class ThemeEntity extends RestgooseModel {
  _id: ID;

  @prop({ required: true })
  userId: ID;

  @prop({ required: true })
  isLight: boolean;

  constructor(userId: ID, isLight: boolean) {
    super();
    this.userId = userId;
    this.isLight = isLight;
  }
}

const ThemeModel = getModelForClass(ThemeEntity);

export default ThemeModel;
