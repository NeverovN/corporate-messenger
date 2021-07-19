import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class RESTApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'some url to be here';
  }

  a(id: string): any {
    return this.get(`messages/${id}`, '');
  }
}
