import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import PhotoController from './app/controllers/PhotoController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.put('/products', ProductController.update);
routes.delete('/products/:id', ProductController.inactivate);

routes.post('/sessions', SessionController.create);

routes.post('/photos', upload.single('file'), PhotoController.create);

export default routes;
