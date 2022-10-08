import { Response, Router } from 'express';

import { RegisterUseCase } from './useCases/register';
import { RegisterFormUseCase } from './useCases/register-form';

export const routes = Router();

routes.get('/ping', (_, res: Response) => {
  return res.json({ succes: true, message: 'pong' });
});

routes.get('/', (_, res: Response) => {
  res.redirect('/register');
});

routes.get('/register', new RegisterFormUseCase().execute);
routes.post('/register', new RegisterUseCase().execute);
