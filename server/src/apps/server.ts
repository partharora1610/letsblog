import cookieSession from 'cookie-session';
import Express, { NextFunction, Request, Response, Express as TExpress } from 'express';
import logger from 'middlewares/logger.middleware';
import AuthRouter from 'routers/auth';
import { NotFoundError } from 'errors/not-found-error';
import { errorHandler } from 'middlewares/error.middleware';
import { IDatabase } from 'interfaces';
import UserRouter from 'routers/user';
import cors from 'cors';
import getEnvVar from 'env/index';
import Context from 'models/Context';

export default class Server {
  db: IDatabase;
  engine: TExpress;

  constructor(database: IDatabase) {
    this.db = database;
    this.engine = Express();
  }

  #registerHandlers() {
    this.engine.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      }),
    );
    this.engine.options('*', cors());
    this.engine.use(logger);

    // this.engine.set('trust proxy', 1);
    this.engine.use(Express.json());

    this.engine.use(
      cookieSession({
        name: 'session',
        keys: [getEnvVar('JWT_SIGNING_KEY')],
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        // sameSite: 'none',
      }),
    );

    this.engine.get('/health', (_, res) => {
      return res.sendStatus(200);
    });

    this.engine.get('/', (_, res) => {
      return res.sendStatus(200);
    });

    const ctx = new Context(this.db);
    const authRouter = new AuthRouter(ctx, this.engine, '/auth');
    const userRouter = new UserRouter(ctx, this.engine, '/user');
    // const resourceRouter = new ResourceRouter(ctx, this.engine, '/resource');
    authRouter.register();
    userRouter.register();

    this.engine.all('*', async (__: Request, _: Response, next: NextFunction) => {
      next(new NotFoundError());
    });

    this.engine.use(errorHandler);
  }

  start() {
    this.#registerHandlers();
  }
}
