import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import schema from './schema';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './types/typeormUser';
import { Post } from './types/typeormPost';

const app = express();
const server = new ApolloServer({
  schema,
});

app.use(compression());
app.listen(3000);
console.log(
  `\n🚀      GraphQL is now running on http://localhost:3000/graphql`,
);

createConnection({
  type: 'mongodb',
  host: 'localhost',
  url:
    'mongodb+srv://cirkul:gncirkul14@messengercluster.zam9m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  port: 3000,
  username: 'cirkul',
  password: 'gncirkul14',
  database: 'test',
  entities: [User, Post],
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
})
  .then(async (connection) => {
    await connection.driver.afterConnect().then();
  })
  .catch((error) => console.log(error));

server.applyMiddleware({ app, path: '/graphql' });
