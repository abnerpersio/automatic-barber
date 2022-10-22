import { Request, Response } from 'express';

export class RegisterFormUseCase {
  execute = async (_: Request, res: Response) => {
    res.render('register.ejs', { name: 'Abner Persio' });
  };
}
