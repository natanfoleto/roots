import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import SessionController from './app/controllers/SessionController';
import PhotoController from './app/controllers/PhotoController';
import ProviderController from './app/controllers/ProviderController';
import ClientController from './app/controllers/ClientController';
import LogController from './app/controllers/LogController';
import SearchProductController from './app/controllers/SearchProductController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.create);
routes.put('/users', UserController.update);

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.put('/clients', ClientController.update);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.put('/products', ProductController.update);
routes.delete('/products/:id', ProductController.inactivate);
routes.post('/search/products', SearchProductController.index);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.create);
routes.put('/categories', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/providers', ProviderController.index);
routes.post('/providers', ProviderController.create);
routes.put('/providers', ProviderController.update);
routes.delete('/providers/:id', ProviderController.delete);

routes.get('/logs', LogController.index);
routes.post('/logs', LogController.create);

routes.post('/sessions', SessionController.create);

routes.post('/photos', upload.single('file'), PhotoController.create);

export default routes;
