import AbstractRouter from '..';
import { isAuthenticated } from 'middlewares/isAuthenticated.middleware';

export default class CommentsRouter extends AbstractRouter {
  registerMiddlewares() {
    return [isAuthenticated];
  }

  registerRoutes(): void {}
}
