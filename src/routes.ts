import { Router } from 'express';

export const routes = Router();

routes.get('/ping', function (req, res) {
  return res.send('pong');
});
