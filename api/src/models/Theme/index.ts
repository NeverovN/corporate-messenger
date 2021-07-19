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
import { ID } from '../../types/common';

@rest({
  /*+*/ route: '/theme',
  /*+*/ methods: [
    /*+*/ all(),
    /*+*/ one(), //GET    /movies/:id
    /*+*/ create(), //POST   /movies
    /*+*/ update(), //PATCH  /movies/:id
    /*+*/ remove(), //DElETE /movies/:id
    /*+*/
  ],
  /*+*/
})
export class Theme extends RestgooseModel {
  _id: ID;

  @prop({ required: true })
  userId: ID;

  @prop({ required: true })
  isLight: boolean;
}
