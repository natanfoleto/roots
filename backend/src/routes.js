import { Router } from 'express';

const routes = new Router();

routes.get('/root', (req, res) => {
  return res.json({ msg: "Hello world!" });
});

export default routes;
