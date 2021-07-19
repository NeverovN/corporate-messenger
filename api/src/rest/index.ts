import { RESTDataSource } from 'apollo-datasource-rest';
import { ThemeEntity } from '../models/Theme';
export class RESTApi extends RESTDataSource<ThemeEntity> {
  constructor(port: number) {
    super();
    this.baseURL = `http://localhost:${port}/`;
  }

  async getThemes(): Promise<ThemeEntity[]> {
    return await this.get('theme');
  }

  async setTheme(): Promise<ThemeEntity> {
    const theme = await this.post('theme', {
      userId: 'bbb',
    });
    console.log(theme);
    return theme;
  }
}
