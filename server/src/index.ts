import Database from 'apps/database';
import Server from 'apps/server';
import getEnvVar, { parseEnv } from 'env/index';
import { createServer } from 'http';
parseEnv();

const database = new Database();
const server = new Server(database);
server.start();

const httpServer = createServer({}, server.engine);

httpServer.listen(parseInt(getEnvVar('PORT')), () => {
  console.log(`Server listening at ${getEnvVar('PORT')}`);
});
