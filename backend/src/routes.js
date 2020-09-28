import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);

routes.post('/sessions', SessionController.create);

export default routes;
