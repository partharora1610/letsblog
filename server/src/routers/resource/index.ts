import ResourceController from 'controllers/resource.controller';
import AbstractRouter from '..';
import { isAuthenticated } from 'middlewares/isAuthenticated.middleware';

export default class ResourceRouter extends AbstractRouter {
  registerMiddlewares() {
    return [isAuthenticated];
  }

  registerRoutes(): void {
    const resourceController = new ResourceController(this.ctx);
    this.router.get('/', resourceController.getAll());
    this.router.get('/:id', resourceController.get());
    this.router.post('/', resourceController.create());
  }
}
