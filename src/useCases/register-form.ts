import { Request, Response } from 'express';

export class RegisterFormUseCase {
  execute = async (_req: Request, res: Response) => {
    res.render('register.ejs', { name: 'Abner Persio' });
  };
}
