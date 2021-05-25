import { createConnection } from 'typeorm';

import { entities } from '../models';

const ADMIN_USERNAME = 'cirkul';
const ADMIN_PASSWORD = 'gncirkul14';
const DATABASE_NAME = 'CorporateMessenger';

// TODO: move mongodb url & credentials into .env files
export async function initDatabase(): Promise<void> {
  await createConnection({
    name: 'default',
    type: 'mongodb',
    url: `mongodb+srv://${ADMIN_USERNAME}:${ADMIN_PASSWORD}@messengercluster.zam9m.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
    port: 3000,
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD,
    database: DATABASE_NAME,
    entities,
    useUnifiedTopology: true, // To use the new Server Discover and Monitoring engine
  });
}
