import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import CategorieController from './app/controllers/CategorieController';
import SessionController from './app/controllers/SessionController';
import PhotoController from './app/controllers/PhotoController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.put('/products', ProductController.update);
routes.delete('/products/:id', ProductController.inactivate);

routes.get('/categories', CategorieController.index);
routes.post('/categories', CategorieController.create);
routes.put('/categories', CategorieController.update);
routes.delete('/categories/:id', CategorieController.delete);

routes.get('/providers', ProviderController.index);
routes.post('/providers', ProviderController.create);
routes.put('/providers', ProviderController.update);
routes.delete('/providers/:id', ProviderController.delete);

routes.post('/sessions', SessionController.create);

routes.post('/photos', upload.single('file'), PhotoController.create);

export default routes;
